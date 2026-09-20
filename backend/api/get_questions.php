<?php
/**
 * Study Plug - Fetch Questions API
 * 
 * Query parameters:
 *  - subject: (string) 'Physics' | 'Mathematics' (default: Physics)
 *  - year: (int) e.g. 2024, 2023, 1985 (or omit / 'all')
 *  - topic: (string) optional topic filter
 *  - limit: (int) default 50
 *  - random: (int: 0 or 1) set to 1 for randomized CBT mock exam
 */

require_once __DIR__ . '/db.php';

 = getDbConnection();

 = isset(['subject']) ? trim(['subject']) : 'Physics';
    = isset(['year']) && ['year'] !== 'all' ? (int)['year'] : null;
   = isset(['topic']) && !empty(['topic']) ? trim(['topic']) : null;
   = isset(['limit']) ? max(1, min(200, (int)['limit'])) : 50;
  = isset(['random']) && (int)['random'] === 1;

 = ['LOWER(subject) = LOWER(:subject)'];
 = [':subject' => ];

if ( !== null &&  > 0) {
    [] = 'exam_year = :year';
    [':year'] = ;
}

if ( !== null) {
    [] = 'LOWER(topic) = LOWER(:topic)';
    [':topic'] = ;
}

 = implode(' AND ', );

if () {
     = 'ORDER BY RAND()';
} else {
     = 'ORDER BY exam_year DESC, question_num ASC, id ASC';
}

 = SELECT id, subject, exam_year, question_num, text, image_url, image_svg,
 option_a, option_b, option_c, option_d,
 correct_answer, explanation, topic, difficulty
 FROM questions
 WHERE 
 
 LIMIT :limit;

try {
     = ->prepare();
    foreach ( as  => ) {
        ->bindValue(, );
    }
    ->bindValue(':limit', , PDO::PARAM_INT);
    ->execute();
     = ->fetchAll();

     = [];
     = 1;
    foreach ( as ) {
        [] = [
            'id'             => (int)['id'],
            'questionNumber' => (int)(['question_num'] ?: ),
            'subject'        => ['subject'],
            'year'           => (int)['exam_year'],
            'topic'          => ['topic'] ?: 'General',
            'difficulty'     => ['difficulty'] ?: 'Medium',
            'text'           => ['text'],
            'imageUrl'       => ['image_url'] ?: null,
            'imageSvg'       => ['image_svg'] ?: null,
            'options'        => [
                ['key' => 'A', 'text' => ['option_a']],
                ['key' => 'B', 'text' => ['option_b']],
                ['key' => 'C', 'text' => ['option_c']],
                ['key' => 'D', 'text' => ['option_d']]
            ],
            'correctAnswer'  => strtoupper(trim(['correct_answer'])),
            'explanation'    => ['explanation'] ?: ''
        ];
        ++;
    }

    echo json_encode([
        'success'   => true,
        'count'     => count(),
        'subject'   => ,
        'year'      =>  ?: 'all',
        'questions' => 
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (PDOException ) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Query failed: ' . ->getMessage()
    ]);
}
