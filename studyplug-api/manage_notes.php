<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/db.php';
define('API_KEY', 'studyplug_secret_2026');

$key = $_GET['api_key'] ?? ($_POST['api_key'] ?? '');
if ($key !== API_KEY) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Unauthorized']);
    exit();
}

$pdo = getDbConnection();
$action = $_GET['action'] ?? 'list_summary';

if ($action === 'delete_teachers_notes') {
    // Delete notes that have "Teacher's Introduction" or are short duplicate stubs
    $stmt = $pdo->prepare("DELETE FROM lesson_notes WHERE content LIKE '%Teacher%Introduction%' OR content LIKE '%future scholar%' OR id IN (4, 8, 17)");
    $stmt->execute();
    $deleted = $stmt->rowCount();

    echo json_encode([
        'success' => true,
        'deleted_count' => $deleted,
        'message' => "Deleted $deleted teacher/duplicate notes."
    ]);
    exit();
}

if ($action === 'delete_by_ids') {
    $ids = $_GET['ids'] ?? '';
    if (!empty($ids)) {
        $idArray = array_map('intval', explode(',', $ids));
        $placeholders = implode(',', array_fill(0, count($idArray), '?'));
        $stmt = $pdo->prepare("DELETE FROM lesson_notes WHERE id IN ($placeholders)");
        $stmt->execute($idArray);
        $deleted = $stmt->rowCount();
        echo json_encode(['success' => true, 'deleted_count' => $deleted, 'message' => "Deleted notes $ids"]);
        exit();
    }
}

if ($action === 'list_summary') {
    $stmt = $pdo->query("SELECT id, subject, topic, LENGTH(content) as content_length, created_at FROM lesson_notes ORDER BY subject, topic");
    $notes = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['success' => true, 'notes' => $notes]);
    exit();
}

echo json_encode(['success' => false, 'error' => 'Unknown action']);
