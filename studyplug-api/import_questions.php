<?php
/**
 * Study Plug - Advanced Bulk Questions Importer API
 * Supports JSON payload & CSV file uploads
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-API-Key');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/db.php';

define('IMPORT_API_KEY', 'studyplug_secret_2026');

$headers = getallheaders();
$providedKey = $_GET['api_key'] 
    ?? ($_POST['api_key'] 
    ?? ($headers['X-API-Key'] 
    ?? ($headers['x-api-key'] ?? '')));

if ($providedKey !== IMPORT_API_KEY) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Unauthorized: Invalid api_key']);
    exit();
}

$pdo = getDbConnection();
$questions = [];

// 1. Check if CSV file uploaded via multipart form
if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $csvFile = $_FILES['file']['tmp_name'];
    $handle = fopen($csvFile, 'r');
    if ($handle !== false) {
        $header = fgetcsv($handle);
        // Normalize header keys
        $headerMap = [];
        foreach ($header as $colIdx => $colName) {
            $cleaned = strtolower(trim(str_replace([' ', '_', '-'], '', $colName)));
            $headerMap[$cleaned] = $colIdx;
        }

        $rowIdx = 1;
        while (($row = fgetcsv($handle)) !== false) {
            $rowIdx++;
            if (empty(array_filter($row))) continue;

            $getCol = function($aliases, $default = '') use ($row, $headerMap) {
                foreach ($aliases as $alias) {
                    $key = strtolower(str_replace([' ', '_', '-'], '', $alias));
                    if (isset($headerMap[$key]) && isset($row[$headerMap[$key]])) {
                        return trim($row[$headerMap[$key]]);
                    }
                }
                return $default;
            };

            $questions[] = [
                'subject'        => $getCol(['subject', 'sub'], 'Mathematics'),
                'exam_year'      => (int)$getCol(['exam_year', 'year', 'examyear'], 2024),
                'question_num'   => (int)$getCol(['question_num', 'questionNumber', 'num', 'qnum', 'id'], count($questions) + 1),
                'text'           => $getCol(['text', 'question', 'question_text', 'stem']),
                'option_a'       => $getCol(['option_a', 'optiona', 'a']),
                'option_b'       => $getCol(['option_b', 'optionb', 'b']),
                'option_c'       => $getCol(['option_c', 'optionc', 'c']),
                'option_d'       => $getCol(['option_d', 'optiond', 'd']),
                'correct_answer' => strtoupper($getCol(['correct_answer', 'correctanswer', 'answer', 'correct', 'ans'], 'A')),
                'explanation'    => $getCol(['explanation', 'solution', 'detail']),
                'topic'          => $getCol(['topic', 'category'], 'General'),
                'difficulty'     => $getCol(['difficulty', 'level'], 'Medium'),
                'image_url'      => $getCol(['image_url', 'imageurl', 'image', 'diagram']),
                'image_svg'      => $getCol(['image_svg', 'imagesvg', 'svg'])
            ];
        }
        fclose($handle);
    }
} else {
    // 2. Otherwise read raw JSON or form-encoded JSON
    $rawInput = file_get_contents('php://input');
    $decoded = json_decode($rawInput, true);

    if (is_array($decoded)) {
        if (isset($decoded['questions']) && is_array($decoded['questions'])) {
            $questions = $decoded['questions'];
        } else {
            $questions = $decoded;
        }
    } elseif (isset($_POST['questions'])) {
        $questions = is_array($_POST['questions']) ? $_POST['questions'] : json_decode($_POST['questions'], true);
    }
}

if (empty($questions) || !is_array($questions)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'error' => 'No valid questions found. Provide a JSON array or upload a CSV file with columns: subject, exam_year, question_num, text, option_a, option_b, option_c, option_d, correct_answer, explanation, topic, difficulty'
    ]);
    exit();
}

// Upsert query: check if question exists for (subject, exam_year, question_num)
$checkSql = "SELECT id FROM questions WHERE LOWER(subject) = LOWER(:subject) AND exam_year = :exam_year AND question_num = :question_num LIMIT 1";
$checkStmt = $pdo->prepare($checkSql);

$updateSql = "UPDATE questions SET 
                text = :text,
                image_url = :image_url,
                image_svg = :image_svg,
                option_a = :option_a,
                option_b = :option_b,
                option_c = :option_c,
                option_d = :option_d,
                correct_answer = :correct_answer,
                explanation = :explanation,
                topic = :topic,
                difficulty = :difficulty
              WHERE id = :id";
$updateStmt = $pdo->prepare($updateSql);

$insertSql = "INSERT INTO questions 
        (subject, exam_year, question_num, text, image_url, image_svg, option_a, option_b, option_c, option_d, correct_answer, explanation, topic, difficulty)
        VALUES 
        (:subject, :exam_year, :question_num, :text, :image_url, :image_svg, :option_a, :option_b, :option_c, :option_d, :correct_answer, :explanation, :topic, :difficulty)";
$insertStmt = $pdo->prepare($insertSql);

$inserted = 0;
$updated = 0;
$subjectsAffected = [];

$pdo->beginTransaction();
try {
    foreach ($questions as $idx => $q) {
        $subject = trim($q['subject'] ?? 'Mathematics');
        $examYear = (int)($q['exam_year'] ?? $q['year'] ?? 2024);
        $qNum = (int)($q['question_num'] ?? $q['questionNumber'] ?? ($idx + 1));
        $text = trim($q['text'] ?? $q['question'] ?? '');

        if (empty($text)) continue;

        $optA = trim($q['option_a'] ?? ($q['options'][0]['text'] ?? ''));
        $optB = trim($q['option_b'] ?? ($q['options'][1]['text'] ?? ''));
        $optC = trim($q['option_c'] ?? ($q['options'][2]['text'] ?? ''));
        $optD = trim($q['option_d'] ?? ($q['options'][3]['text'] ?? ''));
        $correct = strtoupper(trim($q['correct_answer'] ?? $q['correctAnswer'] ?? $q['answer'] ?? 'A'));
        if (!in_array($correct, ['A', 'B', 'C', 'D'])) $correct = 'A';

        $explanation = trim($q['explanation'] ?? $q['solution'] ?? '');
        $topic = trim($q['topic'] ?? 'General');
        $difficulty = trim($q['difficulty'] ?? 'Medium');
        if (!in_array($difficulty, ['Easy', 'Medium', 'Hard'])) $difficulty = 'Medium';

        $imageUrl = !empty($q['image_url']) ? trim($q['image_url']) : (!empty($q['imageUrl']) ? trim($q['imageUrl']) : null);
        $imageSvg = !empty($q['image_svg']) ? trim($q['image_svg']) : (!empty($q['imageSvg']) ? trim($q['imageSvg']) : null);

        $subjectsAffected[$subject] = true;

        // Check for existing question
        $checkStmt->execute([
            ':subject'   => $subject,
            ':exam_year' => $examYear,
            ':question_num' => $qNum
        ]);
        $existing = $checkStmt->fetch();

        if ($existing) {
            $updateStmt->execute([
                ':id'             => $existing['id'],
                ':text'           => $text,
                ':image_url'      => $imageUrl,
                ':image_svg'      => $imageSvg,
                ':option_a'       => $optA,
                ':option_b'       => $optB,
                ':option_c'       => $optC,
                ':option_d'       => $optD,
                ':correct_answer' => $correct,
                ':explanation'    => $explanation,
                ':topic'          => $topic,
                ':difficulty'     => $difficulty
            ]);
            $updated++;
        } else {
            $insertStmt->execute([
                ':subject'        => $subject,
                ':exam_year'      => $examYear,
                ':question_num'   => $qNum,
                ':text'           => $text,
                ':image_url'      => $imageUrl,
                ':image_svg'      => $imageSvg,
                ':option_a'       => $optA,
                ':option_b'       => $optB,
                ':option_c'       => $optC,
                ':option_d'       => $optD,
                ':correct_answer' => $correct,
                ':explanation'    => $explanation,
                ':topic'          => $topic,
                ':difficulty'     => $difficulty
            ]);
            $inserted++;
        }
    }

    // Refresh subjects count
    foreach (array_keys($subjectsAffected) as $sub) {
        $countStmt = $pdo->prepare("SELECT COUNT(*) FROM questions WHERE LOWER(subject) = LOWER(:subject)");
        $countStmt->execute([':subject' => $sub]);
        $totalForSub = (int)$countStmt->fetchColumn();

        $code = strtoupper(substr(preg_replace('/[^a-zA-Z]/', '', $sub), 0, 3));
        $upsertSub = $pdo->prepare("INSERT INTO subjects (name, code, total_questions) VALUES (:name, :code, :total) ON DUPLICATE KEY UPDATE total_questions = :total_up");
        $upsertSub->execute([
            ':name'     => $sub,
            ':code'     => $code,
            ':total'    => $totalForSub,
            ':total_up' => $totalForSub
        ]);
    }

    $pdo->commit();

    // Get grand total questions
    $grandTotal = (int)$pdo->query("SELECT COUNT(*) FROM questions")->fetchColumn();

    echo json_encode([
        'success'      => true,
        'message'      => "Processed " . ($inserted + $updated) . " questions ($inserted inserted, $updated updated).",
        'inserted'     => $inserted,
        'updated'      => $updated,
        'total_in_db'  => $grandTotal
    ]);
} catch (Exception $e) {
    $pdo->rollBack();
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Import failed: ' . $e->getMessage()
    ]);
}
