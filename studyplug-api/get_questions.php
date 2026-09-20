<?php
/**
 * Study Plug - Fetch Questions API
 * 
 * Query parameters:
 *  - subject: (string) 'Physics' | 'Mathematics' (default: Physics)
 *  - year: (int) e.g. 2024, 2023, 1985 (or omit / 'all')
 *  - topic: (string) optional topic filter
 *  - limit: (int) default 50
 *  - random: (int: 0 or 1) set to 1 for randomized CBT mock exam
 */

require_once __DIR__ . '/db.php';

$pdo = getDbConnection();

$subject = isset($_GET['subject']) ? trim($_GET['subject']) : 'Physics';
$year    = isset($_GET['year']) && $_GET['year'] !== 'all' ? (int)$_GET['year'] : null;
$topic   = isset($_GET['topic']) && !empty($_GET['topic']) ? trim($_GET['topic']) : null;
$idsParam = isset($_GET['ids']) && !empty($_GET['ids']) ? trim($_GET['ids']) : null;
$limit   = isset($_GET['limit']) ? max(1, min(200, (int)$_GET['limit'])) : 50;
$random  = isset($_GET['random']) && (int)$_GET['random'] === 1;

$whereClauses = [];
$params = [];

if ($idsParam !== null) {
    $idList = array_map('intval', array_filter(explode(',', $idsParam), 'is_numeric'));
    if (!empty($idList)) {
        $idPlaceholders = [];
        foreach ($idList as $idx => $idVal) {
            $ph = ":id_{$idx}";
            $idPlaceholders[] = $ph;
            $params[$ph] = $idVal;
        }
        $whereClauses[] = 'id IN (' . implode(',', $idPlaceholders) . ')';
    }
}

if (empty($whereClauses)) {
    $whereClauses[] = '(LOWER(subject) = LOWER(:subject) OR LOWER(subject) LIKE :subLike)';
    $params[':subject'] = $subject;
    $params[':subLike'] = '%' . strtolower($subject) . '%';
}

if ($year !== null && $year > 0) {
    $whereClauses[] = 'exam_year = :year';
    $params[':year'] = $year;
}

if ($topic !== null) {
    $topicKeywords = explode(' ', str_replace(['&', ',', '-', '(', ')', '/', ';', ':'], ' ', strtolower($topic)));
    $filteredKeywords = array_values(array_filter($topicKeywords, function($w) {
        $w = trim($w);
        return strlen($w) >= 4 && !in_array($w, ['with', 'from', 'into', 'that', 'this', 'their', 'some', 'laws', 'rules']);
    }));

    $topicConds = ['LOWER(topic) = LOWER(:topic)', 'LOWER(topic) LIKE :topicLike'];
    $params[':topic'] = $topic;
    $params[':topicLike'] = '%' . strtolower($topic) . '%';

    foreach ($filteredKeywords as $idx => $kw) {
        if ($idx >= 3) break;
        $kParamT = ":kwt_{$idx}";
        $kParamP = ":kwp_{$idx}";
        $topicConds[] = "LOWER(text) LIKE {$kParamT}";
        $topicConds[] = "LOWER(topic) LIKE {$kParamP}";
        $params[$kParamT] = "%{$kw}%";
        $params[$kParamP] = "%{$kw}%";
    }

    $whereClauses[] = '(' . implode(' OR ', $topicConds) . ')';
}

$whereSql = implode(' AND ', $whereClauses);

if ($random) {
    $orderSql = 'ORDER BY RAND()';
} else {
    $orderSql = 'ORDER BY exam_year DESC, question_num ASC, id ASC';
}

$sql = "SELECT id, subject, exam_year, question_num, text, image_url, image_svg,
               option_a, option_b, option_c, option_d,
               correct_answer, explanation, topic, difficulty
        FROM questions
        WHERE $whereSql
        $orderSql
        LIMIT :limit";

try {
    $stmt = $pdo->prepare($sql);
    foreach ($params as $key => $val) {
        $stmt->bindValue($key, $val);
    }
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->execute();
    $rows = $stmt->fetchAll();

    $questions = [];
    $index = 1;
    foreach ($rows as $row) {
        $questions[] = [
            'id'             => (int)$row['id'],
            'questionNumber' => (int)($row['question_num'] ?: $index),
            'subject'        => $row['subject'],
            'year'           => (int)$row['exam_year'],
            'topic'          => $row['topic'] ?: 'General',
            'difficulty'     => $row['difficulty'] ?: 'Medium',
            'text'           => $row['text'],
            'imageUrl'       => $row['image_url'] ?: null,
            'imageSvg'       => $row['image_svg'] ?: null,
            'options'        => [
                ['key' => 'A', 'text' => $row['option_a']],
                ['key' => 'B', 'text' => $row['option_b']],
                ['key' => 'C', 'text' => $row['option_c']],
                ['key' => 'D', 'text' => $row['option_d']]
            ],
            'correctAnswer'  => strtoupper(trim($row['correct_answer'])),
            'explanation'    => $row['explanation'] ?: ''
        ];
        $index++;
    }

    echo json_encode([
        'success'   => true,
        'count'     => count($questions),
        'subject'   => $subject,
        'year'      => $year ?: 'all',
        'questions' => $questions
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Query failed: ' . $e->getMessage()
    ]);
}
