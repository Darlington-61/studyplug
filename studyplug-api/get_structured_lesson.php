<?php
/**
 * StudyPlug — Fetch Structured Lesson
 * Returns structured pedagogical sections with verified questions.
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/db.php';
$pdo = getDbConnection();

$subject = isset($_GET['subject']) ? trim($_GET['subject']) : '';
$topic   = isset($_GET['topic'])   ? trim($_GET['topic'])   : '';

if (empty($subject) || empty($topic)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'subject and topic are required']);
    exit();
}

try {
    $subLower = strtolower($subject);
    $topLower = strtolower($topic);
    $stmt = $pdo->prepare("
        SELECT id, subject, topic, subtopic, section_order, section_type, section_title,
               content, examples, formulas, exam_tips, question_ids, solutions, status, version
        FROM structured_lessons
        WHERE (LOWER(subject) LIKE :sub1 OR :sub2 LIKE CONCAT('%', LOWER(subject), '%'))
          AND (
            LOWER(topic) = :top1 
            OR LOWER(topic) LIKE :top2 
            OR :top3 LIKE CONCAT('%', LOWER(topic), '%')
          )
          AND status = 'published'
        ORDER BY section_order ASC
    ");
    $stmt->execute([
        ':sub1' => '%' . $subLower . '%',
        ':sub2' => '%' . $subLower . '%',
        ':top1' => $topLower,
        ':top2' => '%' . $topLower . '%',
        ':top3' => '%' . $topLower . '%'
    ]);
    $sections = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (empty($sections)) {
        echo json_encode(['success' => false, 'found' => false, 'message' => 'No structured lesson found']);
        exit();
    }

    // Decode JSON fields and enrich with real question data
    $allQuestionIds = [];
    foreach ($sections as &$sec) {
        $sec['examples'] = json_decode($sec['examples'] ?: '[]', true);
        $sec['formulas'] = json_decode($sec['formulas'] ?: '[]', true);
        $sec['exam_tips'] = json_decode($sec['exam_tips'] ?: '[]', true);
        $qids = json_decode($sec['question_ids'] ?: '[]', true);
        $sec['question_ids'] = $qids;
        if (!empty($qids)) {
            $allQuestionIds = array_merge($allQuestionIds, $qids);
        }
    }
    unset($sec);

    // Fetch full question objects if referenced
    $questionsById = [];
    if (!empty($allQuestionIds)) {
        $uniqueIds = array_unique(array_filter(array_map('intval', $allQuestionIds)));
        if (!empty($uniqueIds)) {
            $inClause = implode(',', $uniqueIds);
            $qStmt = $pdo->query("
                SELECT id, subject, exam_year, question_num, text, image_url, image_svg,
                       option_a, option_b, option_c, option_d, correct_answer, explanation, topic, difficulty
                FROM questions
                WHERE id IN ({$inClause})
            ");
            foreach ($qStmt->fetchAll(PDO::FETCH_ASSOC) as $qr) {
                $sub = strtolower($qr['subject']);
                $exam = 'JAMB';
                if (strpos($sub, 'waec') !== false) {
                    $exam = 'WAEC';
                } elseif (strpos($sub, 'neco') !== false) {
                    $exam = 'NECO';
                }

                $yearStr = $qr['exam_year'] ? (string)$qr['exam_year'] : '';
                $examLabel = "{$exam}" . ($yearStr ? " {$yearStr}" : "") . " • " . ($qr['topic'] ?: $qr['subject']);

                $questionsById[$qr['id']] = [
                    'id'            => (int)$qr['id'],
                    'subject'       => $qr['subject'],
                    'exam'          => $exam,
                    'year'          => (int)$qr['exam_year'],
                    'exam_label'    => $examLabel,
                    'topic'         => $qr['topic'],
                    'difficulty'    => $qr['difficulty'] ?: 'Medium',
                    'text'          => $qr['text'],
                    'imageUrl'      => $qr['image_url'],
                    'imageSvg'      => $qr['image_svg'],
                    'options'       => [
                        ['key' => 'A', 'text' => $qr['option_a']],
                        ['key' => 'B', 'text' => $qr['option_b']],
                        ['key' => 'C', 'text' => $qr['option_c']],
                        ['key' => 'D', 'text' => $qr['option_d']],
                    ],
                    'correctAnswer' => strtoupper(trim($qr['correct_answer'])),
                    'explanation'   => $qr['explanation'] ?: ''
                ];
            }
        }
    }

    $examTargets = isset($_GET['exam_targets']) && !empty($_GET['exam_targets'])
        ? array_map('strtoupper', array_map('trim', explode(',', $_GET['exam_targets'])))
        : null;

    // Attach full question details and order by target exam priority
    foreach ($sections as &$sec) {
        $sec['questions'] = [];
        foreach ($sec['question_ids'] as $qid) {
            if (isset($questionsById[$qid])) {
                $sec['questions'][] = $questionsById[$qid];
            }
        }

        // If exam targets requested, prioritize matching exam questions first
        if (!empty($examTargets) && count($sec['questions']) > 1) {
            usort($sec['questions'], function($a, $b) use ($examTargets) {
                $aMatch = in_array(strtoupper($a['exam']), $examTargets) ? 0 : 1;
                $bMatch = in_array(strtoupper($b['exam']), $examTargets) ? 0 : 1;
                return $aMatch - $bMatch;
            });
        }
    }
    unset($sec);

    echo json_encode([
        'success'  => true,
        'found'    => true,
        'subject'  => $subject,
        'topic'    => $topic,
        'sections' => $sections
    ], JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
