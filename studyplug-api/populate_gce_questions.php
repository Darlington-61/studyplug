<?php
/**
 * StudyPlug — Populate WAEC GCE & NECO GCE Question Banks
 * Creates dedicated GCE streams from authentic past questions with GCE exam metadata.
 */

header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/db.php';

$apiKey = $_GET['api_key'] ?? '';
if ($apiKey !== 'studyplug_secret_2026') {
    http_response_code(403);
    echo json_encode(['error' => 'Unauthorized']);
    exit();
}

$pdo = getDbConnection();

$subjectsMapping = [
    // WAEC -> WAEC GCE
    'WAEC Mathematics' => 'WAEC GCE Mathematics',
    'WAEC English Language' => 'WAEC GCE English Language',
    'WAEC Physics' => 'WAEC GCE Physics',
    'WAEC Chemistry' => 'WAEC GCE Chemistry',
    'WAEC Biology' => 'WAEC GCE Biology',
    'WAEC Economics' => 'WAEC GCE Economics',
    'WAEC Government' => 'WAEC GCE Government',
    'WAEC Literature in English' => 'WAEC GCE Literature in English',

    // NECO -> NECO GCE
    'NECO Mathematics' => 'NECO GCE Mathematics',
    'NECO English Language' => 'NECO GCE English Language',
    'NECO Physics' => 'NECO GCE Physics',
    'NECO Chemistry' => 'NECO GCE Chemistry',
    'NECO Biology' => 'NECO GCE Biology',
    'NECO Economics' => 'NECO GCE Economics',
    'NECO Government' => 'NECO GCE Government',
];

$results = [];
$totalCloned = 0;

foreach ($subjectsMapping as $sourceSubject => $gceSubject) {
    // Check how many already exist for the GCE subject
    $countStmt = $pdo->prepare("SELECT COUNT(*) FROM questions WHERE subject = :gceSubject");
    $countStmt->execute([':gceSubject' => $gceSubject]);
    $existingGceCount = (int)$countStmt->fetchColumn();

    if ($existingGceCount >= 200) {
        $results[$gceSubject] = [
            'status' => 'already_populated',
            'count' => $existingGceCount
        ];
        continue;
    }

    // Select up to 400 top questions from the source subject
    $fetchStmt = $pdo->prepare("
        SELECT exam_year, question_num, text, image_url, image_svg,
               option_a, option_b, option_c, option_d, correct_answer,
               explanation, topic, difficulty
        FROM questions
        WHERE subject = :sourceSubject
        ORDER BY exam_year DESC, question_num ASC
        LIMIT 400
    ");
    $fetchStmt->execute([':sourceSubject' => $sourceSubject]);
    $rows = $fetchStmt->fetchAll();

    if (empty($rows)) {
        // Fallback: If sourceSubject had no rows, try without prefix (e.g. 'Physics' for WAEC Physics)
        $fallbackSubject = trim(str_replace(['WAEC', 'NECO'], '', $sourceSubject));
        $fetchStmt->execute([':sourceSubject' => $fallbackSubject]);
        $rows = $fetchStmt->fetchAll();
    }

    $insertStmt = $pdo->prepare("
        INSERT INTO questions 
        (subject, exam_year, question_num, text, image_url, image_svg, option_a, option_b, option_c, option_d, correct_answer, explanation, topic, difficulty)
        VALUES
        (:subject, :exam_year, :question_num, :text, :image_url, :image_svg, :option_a, :option_b, :option_c, :option_d, :correct_answer, :explanation, :topic, :difficulty)
    ");

    $insertedForSub = 0;
    $pdo->beginTransaction();
    try {
        foreach ($rows as $row) {
            $examLabel = strpos($gceSubject, 'WAEC') !== false ? 'WASSCE (GCE Private)' : 'NECO SSCE (External GCE)';
            $enhancedTopic = !empty($row['topic']) && $row['topic'] !== 'General' 
                ? $row['topic'] 
                : "{$gceSubject} Core Syllabus";

            $explanation = $row['explanation'];
            if (empty($explanation) || strpos($explanation, 'StudyPlug') === false) {
                $explanation = "📚 **StudyPlug {$examLabel} Chalkboard Solution**:\n" .
                               "• **Correct Option**: ({$row['correct_answer']})\n" .
                               "• **Examiner Guidance**: Essential examination concept tested regularly in {$gceSubject}.\n" .
                               ($row['explanation'] ? "• **Step-by-Step**: " . $row['explanation'] : "");
            }

            $insertStmt->execute([
                ':subject'        => $gceSubject,
                ':exam_year'      => $row['exam_year'],
                ':question_num'   => $row['question_num'],
                ':text'           => $row['text'],
                ':image_url'      => $row['image_url'],
                ':image_svg'      => $row['image_svg'],
                ':option_a'       => $row['option_a'],
                ':option_b'       => $row['option_b'],
                ':option_c'       => $row['option_c'],
                ':option_d'       => $row['option_d'],
                ':correct_answer' => $row['correct_answer'],
                ':explanation'    => $explanation,
                ':topic'          => $enhancedTopic,
                ':difficulty'     => $row['difficulty'] ?: 'Medium'
            ]);
            $insertedForSub++;
        }
        $pdo->commit();
        $totalCloned += $insertedForSub;
        $results[$gceSubject] = [
            'status' => 'success',
            'inserted' => $insertedForSub,
            'source' => $sourceSubject
        ];
    } catch (Exception $e) {
        $pdo->rollBack();
        $results[$gceSubject] = [
            'status' => 'error',
            'error' => $e->getMessage()
        ];
    }
}

echo json_encode([
    'success' => true,
    'total_gce_inserted' => $totalCloned,
    'results' => $results
]);
