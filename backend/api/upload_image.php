<?php
/**
 * Study Plug - Image Upload API for Question Diagrams
 */

require_once __DIR__ . '/db.php';

define('UPLOAD_API_KEY', 'studyplug_secret_2026');

 = ['api_key'] ?? (['api_key'] ?? '');
if ( !== UPLOAD_API_KEY) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Unauthorized: Invalid api_key']);
    exit();
}

if (!isset(['image']) || ['image']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'No valid image file uploaded.']);
    exit();
}

 = ['image'];
 = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];
if (!in_array(['type'], )) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Allowed formats: JPG, PNG, WEBP, SVG.']);
    exit();
}

 = __DIR__ . '/../uploads/diagrams/';
if (!is_dir()) {
    mkdir(, 0755, true);
}

 = pathinfo(['name'], PATHINFO_EXTENSION);
 = 'diagram_' . time() . '_' . bin2hex(random_bytes(4)) . '.' . ;
 =  . ;

if (move_uploaded_file(['tmp_name'], )) {
    // Generate public URL relative to web root
     = (!empty(['HTTPS']) && ['HTTPS'] !== 'off') ? 'https' : 'http';
    System.Management.Automation.Internal.Host.InternalHost = ['HTTP_HOST'];
     =  . '://' . System.Management.Automation.Internal.Host.InternalHost . dirname(dirname(['SCRIPT_NAME']));
     = rtrim(, '/') . '/uploads/diagrams/' . ;

    echo json_encode([
        'success'   => true,
        'filename'  => ,
        'url'       => ,
        'relativePath' => 'uploads/diagrams/' . 
    ]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save uploaded file.']);
}
