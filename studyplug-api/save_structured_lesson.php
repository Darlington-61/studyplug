<?php
/**
 * StudyPlug — Save Structured Lesson
 * Saves or updates structured pedagogical sections for a syllabus topic.
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-API-Key');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); exit();
}

require_once __DIR__ . '/db.php';
$pdo = getDbConnection();

if (($_GET['key'] ?? '') !== 'StudyPlug2026' && ($_POST['key'] ?? '') !== 'StudyPlug2026') {
    http_response_code(403); echo json_encode(['error' => 'Forbidden']); exit();
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!isset($data['subject']) || !isset($data['topic']) || !isset($data['sections'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'subject, topic, and sections array are required']);
    exit();
}

$subject = trim($data['subject']);
$topic   = trim($data['topic']);
$sections = $data['sections'];

if (!is_array($sections) || empty($sections)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'sections array must not be empty']);
    exit();
}

$pdo->beginTransaction();
try {
    // Delete existing sections for this topic to ensure clean re-ordering
    $del = $pdo->prepare("DELETE FROM structured_lessons WHERE LOWER(subject) = LOWER(:s) AND LOWER(topic) = LOWER(:t)");
    $del->execute([':s' => $subject, ':t' => $topic]);

    $ins = $pdo->prepare("
        INSERT INTO structured_lessons 
          (subject, topic, subtopic, section_order, section_type, section_title, content,
           examples, formulas, exam_tips, question_ids, solutions, status, version)
        VALUES
          (:subject, :topic, :subtopic, :section_order, :section_type, :section_title, :content,
           :examples, :formulas, :exam_tips, :question_ids, :solutions, :status, :version)
    ");

    $count = 0;
    foreach ($sections as $i => $sec) {
        $ins->execute([
            ':subject'       => $subject,
            ':topic'         => $topic,
            ':subtopic'      => $sec['subtopic'] ?? null,
            ':section_order' => $sec['section_order'] ?? ($i + 1),
            ':section_type'  => $sec['section_type'] ?? 'concept',
            ':section_title' => $sec['section_title'] ?? "Section " . ($i + 1),
            ':content'       => $sec['content'] ?? '',
            ':examples'      => isset($sec['examples']) ? json_encode($sec['examples'], JSON_UNESCAPED_UNICODE) : null,
            ':formulas'      => isset($sec['formulas']) ? json_encode($sec['formulas'], JSON_UNESCAPED_UNICODE) : null,
            ':exam_tips'     => isset($sec['exam_tips']) ? json_encode($sec['exam_tips'], JSON_UNESCAPED_UNICODE) : null,
            ':question_ids'  => isset($sec['question_ids']) ? json_encode($sec['question_ids']) : null,
            ':solutions'     => $sec['solutions'] ?? null,
            ':status'        => $sec['status'] ?? 'published',
            ':version'       => $sec['version'] ?? 1,
        ]);
        $count++;
    }

    $pdo->commit();
    echo json_encode([
        'success' => true,
        'message' => "Saved $count structured sections for $subject: $topic",
        'subject' => $subject,
        'topic'   => $topic,
        'sections_count' => $count
    ]);
} catch (Exception $e) {
    $pdo->rollBack();
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
