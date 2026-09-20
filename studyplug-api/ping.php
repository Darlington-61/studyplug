<?php
/**
 * Study Plug - Health Check & Diagnostics
 * Access this in browser: https://eznonews.com.ng/studyplug-api/ping.php
 */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/db.php';

// Clean up setup zip if still present in public_html
$zipPath = dirname(__DIR__) . '/studyplug-api.zip';
if (file_exists($zipPath)) {
    @unlink($zipPath);
}

// Ensure uploads directory exists and is writable
$diagramDir = __DIR__ . '/uploads/diagrams';
if (!is_dir($diagramDir)) {
    @mkdir($diagramDir, 0777, true);
}
@chmod($diagramDir, 0777);

$response = [
    'status'           => 'ok',
    'app'              => 'Study Plug CBT Cloud Database Engine',
    'isolated_from_wp' => true,
    'php_version'      => phpversion(),
    'uploads_writable' => is_writable($diagramDir),
    'api_url'          => 'https://eznonews.com.ng/studyplug-api',
    'database'         => [
        'connected'             => false,
        'db_name'               => DB_NAME,
        'total_questions_in_db' => 0,
        'message'               => 'Not tested yet'
    ]
];

try {
    $pdo = getDbConnection();
    $stmt = $pdo->query("SELECT COUNT(*) as q_count FROM questions");
    $row = $stmt->fetch();
    $response['database'] = [
        'connected'             => true,
        'db_name'               => DB_NAME,
        'total_questions_in_db' => (int)($row['q_count'] ?? 0),
        'message'               => 'Connected successfully to Study Plug MySQL database.'
    ];
} catch (Exception $e) {
    $response['database'] = [
        'connected' => false,
        'error'     => $e->getMessage()
    ];
}

echo json_encode($response, JSON_PRETTY_PRINT);
