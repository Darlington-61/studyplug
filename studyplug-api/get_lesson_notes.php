<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/db.php';
$pdo = getDbConnection();

$subject = $_GET['subject'] ?? '';
$topic = $_GET['topic'] ?? '';

$where = [];
$params = [];

if (!empty($subject)) {
    $where[] = 'subject = :subject';
    $params[':subject'] = $subject;
}

if (!empty($topic)) {
    $where[] = 'topic = :topic';
    $params[':topic'] = $topic;
}

$whereSql = !empty($where) ? 'WHERE ' . implode(' AND ', $where) : '';
$sql = "SELECT id, subject, exam_type, class_level, topic, subtopic, image_url, summary_60s, key_formulas, content, pro_tips_95, syllabus_objectives, created_at 
        FROM lesson_notes 
        $whereSql 
        ORDER BY subject ASC, topic ASC";

try {
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $notes = $stmt->fetchAll();

    echo json_encode([
        'success' => true,
        'count' => count($notes),
        'notes' => $notes
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
