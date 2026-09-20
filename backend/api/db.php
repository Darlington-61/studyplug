<?php
/**
 * Study Plug - Database Connection & CORS Handler
 * Configured for cPanel MySQL
 */

// Enable CORS for frontend requests
header(Access-Control-Allow-Origin: *);
header(Access-Control-Allow-Methods: GET, POST, OPTIONS);
header(Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With);
header(Content-Type: application/json; charset=UTF-8);

// Handle preflight OPTIONS request
if (['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database Configuration - Replace with your cPanel MySQL details
define('DB_HOST', 'localhost');
define('DB_NAME', 'studyplug_db');     // e.g. cpaneluser_studyplug
define('DB_USER', 'studyplug_user');   // e.g. cpaneluser_dbuser
define('DB_PASS', 'your_password_here');
define('DB_CHARSET', 'utf8mb4');

function getDbConnection() {
    static  = null;
    if ( === null) {
         = mysql:host= . DB_HOST . ;dbname= . DB_NAME . ;charset= . DB_CHARSET;
         = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        try {
             = new PDO(, DB_USER, DB_PASS, );
        } catch (PDOException ) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'error' => 'Database connection failed: ' . ->getMessage(),
                'hint' => 'Check DB_NAME, DB_USER, DB_PASS in backend/api/db.php'
            ]);
            exit();
        }
    }
    return ;
}
