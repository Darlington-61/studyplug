<?php
/**
 * Study Plug - Delete Question API
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-API-Key');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/db.php';

define('ADMIN_API_KEY', 'studyplug_secret_2026');

$headers = getallheaders();
$providedKey = $_GET['api_key'] 
    ?? ($_POST['api_key'] 
    ?? ($headers['X-API-Key'] 
    ?? ($headers['x-api-key'] ?? '')));

if ($providedKey !== ADMIN_API_KEY) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Unauthorized']);
    exit();
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
$id = (int)($_GET['id'] ?? ($data['id'] ?? ($_POST['id'] ?? 0)));

if ($id <= 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Valid question id required']);
    exit();
}

try {
    $pdo = getDbConnection();
    
    // Find subject first to decrement counter
    $subStmt = $pdo->prepare("SELECT subject FROM questions WHERE id = :id");
    $subStmt->execute([':id' => $id]);
    $subject = $subStmt->fetchColumn();

    $delStmt = $pdo->prepare("DELETE FROM questions WHERE id = :id");
    $delStmt->execute([':id' => $id]);

    if ($subject) {
        $countStmt = $pdo->prepare("SELECT COUNT(*) FROM questions WHERE LOWER(subject) = LOWER(:subject)");
        $countStmt->execute([':subject' => $subject]);
        $totalForSub = (int)$countStmt->fetchColumn();

        $updateSub = $pdo->prepare("UPDATE subjects SET total_questions = :total WHERE LOWER(name) = LOWER(:subject)");
        $updateSub->execute([':total' => $totalForSub, ':subject' => $subject]);
    }

    echo json_encode([
        'success' => true,
        'message' => "Question #$id deleted successfully."
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
