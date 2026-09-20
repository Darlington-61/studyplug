<?php
/**
 * StudyPlug — Subtopic Exam Coverage Matrix API
 * Reports question counts across JAMB, WAEC, NECO for every subtopic in a topic.
 * key=StudyPlug2026
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/db.php';
$pdo = getDbConnection();

$subject = isset($_GET['subject']) ? trim($_GET['subject']) : 'Physics';
$topic   = isset($_GET['topic'])   ? trim($_GET['topic'])   : 'Motion';

try {
    // 1. Fetch subtopics from coverage matrix
    $stmt = $pdo->prepare("
        SELECT subtopic_code, subtopic_name, section_order, has_explanation, has_example,
               has_past_question, has_solution, covered, status, question_ids
        FROM syllabus_coverage_matrix
        WHERE LOWER(subject) = LOWER(:subject) AND LOWER(topic) = LOWER(:topic)
        ORDER BY section_order ASC, id ASC
    ");
    $stmt->execute([':subject' => $subject, ':topic' => $topic]);
    $subtopics = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 2. Fetch all classified questions for this topic to count per exam & subtopic
    $qStmt = $pdo->prepare("
        SELECT id, subject, exam_year, topic, subtopic
        FROM questions
        WHERE LOWER(subject) LIKE :subLike 
          AND (LOWER(topic) LIKE :topLike OR LOWER(text) LIKE :topLike)
    ");
    $qStmt->execute([
        ':subLike' => '%' . strtolower($subject) . '%',
        ':topLike' => '%' . strtolower($topic) . '%'
    ]);
    $allQuestions = $qStmt->fetchAll(PDO::FETCH_ASSOC);

    $matrix = [];
    $totalJamb = 0;
    $totalWaec = 0;
    $totalNeco = 0;

    foreach ($subtopics as $sub) {
        $qids = json_decode($sub['question_ids'] ?: '[]', true);
        $sName = strtolower($sub['subtopic_name']);
        
        // Count matching questions for this subtopic
        $jambCount = 0;
        $waecCount = 0;
        $necoCount = 0;

        foreach ($allQuestions as $q) {
            $qSub = strtolower($q['subject'] . ' ' . ($q['subtopic'] ?? '') . ' ' . $q['topic']);
            $isMatch = false;
            
            // Check direct ID or keyword match
            if (in_array($q['id'], $qids)) {
                $isMatch = true;
            } elseif (strpos($qSub, $sName) !== false) {
                $isMatch = true;
            } else {
                $keywords = array_filter(explode(' ', str_replace(['&', ',', '-', '(', ')'], ' ', $sName)), function($w) {
                    return strlen($w) >= 4 && !in_array($w, ['meaning', 'types', 'forces', 'laws', 'motion']);
                });
                foreach ($keywords as $kw) {
                    if (strpos($qSub, $kw) !== false) {
                        $isMatch = true;
                        break;
                    }
                }
            }

            if ($isMatch) {
                $qSubj = strtolower($q['subject']);
                if (strpos($qSubj, 'waec') !== false) {
                    $waecCount++;
                } elseif (strpos($qSubj, 'neco') !== false) {
                    $necoCount++;
                } else {
                    $jambCount++;
                }
            }
        }

        // If specific question_ids are linked, ensure minimum verified count
        if (!empty($qids)) {
            $jambCount = max($jambCount, count($qids));
        }

        $hasVisual = in_array(strtolower($sub['subtopic_name']), ['projectiles', 'motion graphs', 'velocity-time graphs', 'oblique projection']);

        $matrix[] = [
            'subtopic_code'    => $sub['subtopic_code'],
            'subtopic_name'    => $sub['subtopic_name'],
            'section_order'    => (int)$sub['section_order'],
            'jamb_questions'   => $jambCount,
            'waec_questions'   => $waecCount,
            'neco_questions'   => $necoCount,
            'lesson'           => (bool)$sub['has_explanation'],
            'worked_examples'  => (bool)$sub['has_example'],
            'animated_visual'  => $hasVisual ? 'Available' : 'None',
            'solutions'        => (bool)$sub['has_solution'],
            'covered'          => (bool)$sub['covered'],
            'status'           => $sub['status']
        ];

        $totalJamb += $jambCount;
        $totalWaec += $waecCount;
        $totalNeco += $necoCount;
    }

    echo json_encode([
        'success'           => true,
        'subject'           => $subject,
        'topic'             => $topic,
        'total_subtopics'   => count($matrix),
        'summary'           => [
            'total_jamb_questions' => $totalJamb,
            'total_waec_questions' => $totalWaec,
            'total_neco_questions' => $totalNeco,
        ],
        'subtopics'         => $matrix
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
