<?php
/**
 * Study Plug - Image Upload API for Question Diagrams
 */

require_once __DIR__ . '/db.php';

define('UPLOAD_API_KEY', 'studyplug_secret_2026');

$providedKey = $_GET['api_key'] ?? ($_POST['api_key'] ?? '');
if ($providedKey !== UPLOAD_API_KEY) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Unauthorized: Invalid api_key']);
    exit();
}

if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'No valid image file uploaded.']);
    exit();
}

$file = $_FILES['image'];
$allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];
if (!in_array($file['type'], $allowedTypes)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Allowed formats: JPG, PNG, WEBP, SVG.']);
    exit();
}

$uploadDir = __DIR__ . '/uploads/diagrams/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$ext = pathinfo($file['name'], PATHINFO_EXTENSION);
$filename = 'diagram_' . time() . '_' . bin2hex(random_bytes(4)) . '.' . $ext;
$targetPath = $uploadDir . $filename;

if (move_uploaded_file($file['tmp_name'], $targetPath)) {
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'];
    $baseUrl = $protocol . '://' . $host . dirname($_SERVER['SCRIPT_NAME']);
    $publicUrl = rtrim($baseUrl, '/') . '/uploads/diagrams/' . $filename;

    echo json_encode([
        'success'   => true,
        'filename'  => $filename,
        'url'       => $publicUrl,
        'relativePath' => 'uploads/diagrams/' . $filename
    ]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save uploaded file.']);
}
