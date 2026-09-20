<?php
/**
 * StudyPlug — Automated Subtopic Coverage Validator
 * 
 * Verifies that every required subtopic in the Master Syllabus has:
 *  - Full explanation
 *  - Worked example (where required)
 *  - Authentic past question from the question bank
 *  - Step-by-step solution
 * 
 * Output:
 *  - status: 'COMPLETE' | 'INCOMPLETE'
 *  - required_subtopics: INT
 *  - covered_subtopics: INT
 *  - missing_subtopics: ARRAY
 *  - coverage_percentage: FLOAT
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); exit();
}

require_once __DIR__ . '/db.php';
$pdo = getDbConnection();

$subject = $_GET['subject'] ?? ($_POST['subject'] ?? '');
$topic   = $_GET['topic']   ?? ($_POST['topic']   ?? '');

if (empty($subject) || empty($topic)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'subject and topic are required']);
    exit();
}

try {
    // 1. Fetch all required subtopics from coverage matrix
    $stmt = $pdo->prepare("
        SELECT id, subtopic_code, subtopic_name, has_explanation, has_example, 
               has_past_question, has_solution, section_order, question_ids, status, covered 
        FROM syllabus_coverage_matrix 
        WHERE LOWER(subject) = LOWER(:subject) AND LOWER(topic) = LOWER(:topic)
        ORDER BY id ASC
    ");
    $stmt->execute([':subject' => $subject, ':topic' => $topic]);
    $subtopics = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $totalRequired = count($subtopics);

    if ($totalRequired === 0) {
        echo json_encode([
            'success' => false,
            'status' => 'NO_MANIFEST',
            'message' => "No master syllabus manifest found for {$subject} -> {$topic}. First populate the subtopic manifest.",
            'required_subtopics' => 0,
            'covered_subtopics' => 0,
            'missing_subtopics' => []
        ]);
        exit();
    }

    $covered = [];
    $missing = [];

    foreach ($subtopics as $row) {
        $isCovered = (int)$row['covered'] === 1 && (int)$row['has_explanation'] === 1;
        if ($isCovered) {
            $covered[] = [
                'code' => $row['subtopic_code'],
                'name' => $row['subtopic_name'],
                'section_order' => (int)$row['section_order'],
                'has_explanation' => (bool)$row['has_explanation'],
                'has_example' => (bool)$row['has_example'],
                'has_past_question' => (bool)$row['has_past_question'],
                'has_solution' => (bool)$row['has_solution'],
                'question_ids' => $row['question_ids']
            ];
        } else {
            $missingItems = [];
            if (!(int)$row['has_explanation']) $missingItems[] = 'Explanation missing';
            if (!(int)$row['has_example']) $missingItems[] = 'Worked example missing';
            if (!(int)$row['has_past_question']) $missingItems[] = 'Past question missing';
            if (!(int)$row['has_solution']) $missingItems[] = 'Solution missing';

            $missing[] = [
                'code' => $row['subtopic_code'],
                'name' => $row['subtopic_name'],
                'reasons' => $missingItems
            ];
        }
    }

    $coveredCount = count($covered);
    $missingCount = count($missing);
    $coveragePct = round(($coveredCount / $totalRequired) * 100, 1);
    $isComplete = ($missingCount === 0 && $coveredCount === $totalRequired);

    echo json_encode([
        'success' => true,
        'subject' => $subject,
        'topic' => $topic,
        'status' => $isComplete ? 'COMPLETE' : 'INCOMPLETE',
        'is_published' => $isComplete,
        'required_subtopics' => $totalRequired,
        'covered_subtopics' => $coveredCount,
        'missing_count' => $missingCount,
        'coverage_percentage' => $coveragePct,
        'covered' => $covered,
        'missing' => $missing
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
