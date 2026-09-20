<?php
/**
 * Study Plug - Subjects & Database Summary API
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/db.php';

try {
    $pdo = getDbConnection();

    // 1. Grand total questions
    $totalQuestions = (int)$pdo->query("SELECT COUNT(*) FROM questions")->fetchColumn();

    // 2. Summary by subject
    $subjectSql = "SELECT subject, COUNT(*) as count, 
                          MIN(exam_year) as min_year, 
                          MAX(exam_year) as max_year
                   FROM questions 
                   GROUP BY subject 
                   ORDER BY count DESC";
    $subjectRows = $pdo->query($subjectSql)->fetchAll();

    $subjects = [];
    foreach ($subjectRows as $row) {
        $sub = $row['subject'];

        // Get distinct years
        $yearsStmt = $pdo->prepare("SELECT DISTINCT exam_year FROM questions WHERE subject = :subject ORDER BY exam_year DESC");
        $yearsStmt->execute([':subject' => $sub]);
        $years = $yearsStmt->fetchAll(PDO::FETCH_COLUMN);

        // Get distinct topics
        $topicsStmt = $pdo->prepare("SELECT DISTINCT topic FROM questions WHERE subject = :subject AND topic IS NOT NULL AND topic != '' ORDER BY topic ASC LIMIT 25");
        $topicsStmt->execute([':subject' => $sub]);
        $topics = $topicsStmt->fetchAll(PDO::FETCH_COLUMN);

        $subjects[] = [
            'name'       => $sub,
            'count'      => (int)$row['count'],
            'min_year'   => (int)$row['min_year'],
            'max_year'   => (int)$row['max_year'],
            'years'      => array_map('intval', $years),
            'topics'     => $topics
        ];
    }

    // 3. Completed mock exams
    $totalExams = (int)$pdo->query("SELECT COUNT(*) FROM exam_sessions")->fetchColumn();

    echo json_encode([
        'success'         => true,
        'total_questions' => $totalQuestions,
        'total_subjects'  => count($subjects),
        'total_exams'     => $totalExams,
        'subjects'        => $subjects
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Database error: ' . $e->getMessage()
    ]);
}
