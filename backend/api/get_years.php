<?php
/**
 * Study Plug - Get Available Years API
 */

require_once __DIR__ . '/db.php';

 = getDbConnection();

 = isset(['subject']) ? trim(['subject']) : 'Physics';

 = SELECT exam_year, COUNT(*) as total_questions
 FROM questions
 WHERE LOWER(subject) = LOWER(:subject)
 GROUP BY exam_year
 ORDER BY exam_year DESC;

try {
     = ->prepare();
    ->execute([':subject' => ]);
     = ->fetchAll();

     = [];
    foreach ( as ) {
        [] = [
            'year'  => (int)['exam_year'],
            'total' => (int)['total_questions']
        ];
    }

    echo json_encode([
        'success' => true,
        'subject' => ,
        'years'   => 
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (PDOException ) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Query failed: ' . ->getMessage()
    ]);
}
