<?php
/**
 * StudyPlug — Import Master Syllabus Subtopic Manifest into Coverage Database
 * key=StudyPlug2026
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); exit();
}

require_once __DIR__ . '/db.php';

if (($_GET['key'] ?? '') !== 'StudyPlug2026' && ($_POST['key'] ?? '') !== 'StudyPlug2026') {
    http_response_code(403); echo json_encode(['error' => 'Forbidden']); exit();
}

$pdo = getDbConnection();
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data) || empty($data['subject']) || empty($data['topic']) || !is_array($data['subtopics'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid manifest data: subject, topic, and subtopics array required']);
    exit();
}

$subject = trim($data['subject']);
$topic = trim($data['topic']);
$topicNumber = (int)($data['topic_number'] ?? 0);
$subtopics = $data['subtopics'];

try {
    $pdo->beginTransaction();

    // 1. Insert or update master topic
    $stmtTopic = $pdo->prepare("
        INSERT INTO syllabus_master_topics (subject, topic_number, topic_name, total_subtopics)
        VALUES (:subject, :num, :topic, :total)
        ON DUPLICATE KEY UPDATE topic_number = :num2, total_subtopics = :total2
    ");
    $stmtTopic->execute([
        ':subject' => $subject,
        ':num' => $topicNumber,
        ':topic' => $topic,
        ':total' => count($subtopics),
        ':num2' => $topicNumber,
        ':total2' => count($subtopics)
    ]);

    // 2. Insert subtopics into coverage matrix if not existing
    $stmtSub = $pdo->prepare("
        INSERT INTO syllabus_coverage_matrix 
            (subject, topic, subtopic_code, subtopic_name, status, covered)
        VALUES 
            (:subject, :topic, :code, :name, 'NOT_STARTED', 0)
        ON DUPLICATE KEY UPDATE subtopic_name = :name2
    ");

    $prefix = strtoupper(substr($subject, 0, 3)) . '-T' . str_pad($topicNumber, 2, '0', STR_PAD_LEFT);

    foreach ($subtopics as $idx => $stName) {
        $code = $prefix . '-S' . str_pad($idx + 1, 3, '0', STR_PAD_LEFT);
        $stmtSub->execute([
            ':subject' => $subject,
            ':topic' => $topic,
            ':code' => $code,
            ':name' => $stName,
            ':name2' => $stName
        ]);
    }

    $pdo->commit();

    echo json_encode([
        'success' => true,
        'message' => "Imported manifest for {$subject}: {$topic} with " . count($subtopics) . " mandatory subtopics.",
        'subject' => $subject,
        'topic' => $topic,
        'subtopic_count' => count($subtopics)
    ]);

} catch (Exception $e) {
    if ($pdo->inTransaction()) $pdo->rollBack();
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
