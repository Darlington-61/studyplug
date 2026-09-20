<?php
/**
 * StudyPlug — Update Subtopic Coverage Matrix API
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

if (!is_array($data) || empty($data['subject']) || empty($data['topic']) || !is_array($data['items'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid data: subject, topic, and items array required']);
    exit();
}

$subject = trim($data['subject']);
$topic   = trim($data['topic']);
$items   = $data['items'];

try {
    $stmt = $pdo->prepare("
        UPDATE syllabus_coverage_matrix SET
            has_explanation   = :exp,
            has_example       = :ex,
            has_past_question = :pq,
            has_solution      = :sol,
            section_order     = :ord,
            question_ids      = :qids,
            covered           = :cov,
            status            = :st
        WHERE LOWER(subject) = LOWER(:sub) 
          AND LOWER(topic) = LOWER(:top) 
          AND (LOWER(subtopic_name) = LOWER(:name) OR subtopic_code = :code)
    ");

    $updatedCount = 0;
    foreach ($items as $item) {
        $qids = is_array($item['question_ids'] ?? null) ? json_encode($item['question_ids']) : ($item['question_ids'] ?? null);
        $stmt->execute([
            ':exp'  => (int)($item['has_explanation'] ?? 0),
            ':ex'   => (int)($item['has_example'] ?? 0),
            ':pq'   => (int)($item['has_past_question'] ?? 0),
            ':sol'  => (int)($item['has_solution'] ?? 0),
            ':ord'  => (int)($item['section_order'] ?? 0),
            ':qids' => $qids,
            ':cov'  => (int)($item['covered'] ?? 0),
            ':st'   => $item['status'] ?? 'COVERED',
            ':sub'  => $subject,
            ':top'  => $topic,
            ':name' => $item['subtopic_name'] ?? '',
            ':code' => $item['subtopic_code'] ?? ''
        ]);
        $updatedCount += $stmt->rowCount();
    }

    echo json_encode([
        'success' => true,
        'message' => "Updated {$updatedCount} subtopics in coverage matrix for {$subject}: {$topic}",
        'updated_count' => $updatedCount
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
