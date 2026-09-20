<?php
/**
 * Study Plug - Bulk Questions Importer API
 * 
 * Usage:
 * POST to this endpoint with JSON body containing an array of questions:
 * [
 *   {
 *     subject: Physics,
 *     exam_year: 2024,
 *     question_num: 1,
 *     text: A car accelerates uniformly from rest...,
 *     image_url: uploads/diagrams/physics_2024_01.png,
 *     option_a: 5 m/s,
 *     option_b: 10 m/s,
 *     option_c: 15 m/s,
 *     option_d: 20 m/s,
 *     correct_answer: B,
 *     explanation: Using v = u + at...,
 *     topic: Motion,
 *     difficulty: Easy
 *   }
 * ]
 * 
 * Security: supply ?api_key=studyplug_admin_secret (change this in db.php or here)
 */

require_once __DIR__ . '/db.php';

// Security key
define('IMPORT_API_KEY', 'studyplug_secret_2026');

 = ['api_key'] ?? (['api_key'] ?? '');
if ( !== IMPORT_API_KEY) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Unauthorized: Invalid api_key']);
    exit();
}

 = file_get_contents('php://input');
 = json_decode(, true);

if (!is_array()) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON input. Expected array of questions.']);
    exit();
}

 = getDbConnection();

 = INSERT INTO questions 
 (subject, exam_year, question_num, text, image_url, image_svg, option_a, option_b, option_c, option_d, correct_answer, explanation, topic, difficulty)
 VALUES 
 (:subject, :exam_year, :question_num, :text, :image_url, :image_svg, :option_a, :option_b, :option_c, :option_d, :correct_answer, :explanation, :topic, :difficulty);

 = ->prepare();
 = 0;
 = [];

->beginTransaction();
try {
    foreach ( as  => ) {
        ->execute([
            ':subject'        => ['subject'] ?? 'Physics',
            ':exam_year'      => (int)(['exam_year'] ?? ['year'] ?? 2024),
            ':question_num'   => (int)(['question_num'] ?? ['questionNumber'] ?? ( + 1)),
            ':text'           => ['text'] ?? '',
            ':image_url'      => ['image_url'] ?? ['imageUrl'] ?? null,
            ':image_svg'      => ['image_svg'] ?? ['imageSvg'] ?? null,
            ':option_a'       => ['option_a'] ?? (['options'][0]['text'] ?? ''),
            ':option_b'       => ['option_b'] ?? (['options'][1]['text'] ?? ''),
            ':option_c'       => ['option_c'] ?? (['options'][2]['text'] ?? ''),
            ':option_d'       => ['option_d'] ?? (['options'][3]['text'] ?? ''),
            ':correct_answer' => strtoupper(['correct_answer'] ?? ['correctAnswer'] ?? 'A'),
            ':explanation'    => ['explanation'] ?? '',
            ':topic'          => ['topic'] ?? 'General',
            ':difficulty'     => ['difficulty'] ?? 'Medium'
        ]);
        ++;
    }
    ->commit();

    echo json_encode([
        'success'  => true,
        'message'  => Successfully imported questions into Study Plug database.,
        'inserted' => 
    ]);
} catch (Exception ) {
    ->rollBack();
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Import failed: ' . ->getMessage()
    ]);
}
