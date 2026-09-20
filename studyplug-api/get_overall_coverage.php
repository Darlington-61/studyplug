<?php
/**
 * StudyPlug — Overall Syllabus Coverage API
 * Calculates genuine subtopic-based coverage across all subjects
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); exit();
}

require_once __DIR__ . '/db.php';
$pdo = getDbConnection();

try {
    // 1. Overall stats
    $totalSubtopics = (int)$pdo->query("SELECT COUNT(*) FROM syllabus_coverage_matrix")->fetchColumn();
    $coveredSubtopics = (int)$pdo->query("SELECT COUNT(*) FROM syllabus_coverage_matrix WHERE covered = 1")->fetchColumn();
    $overallPct = $totalSubtopics > 0 ? round(($coveredSubtopics / $totalSubtopics) * 100, 1) : 0;

    // 2. Breakdown by subject
    $stmtSub = $pdo->query("
        SELECT subject, 
               COUNT(*) as total, 
               SUM(CASE WHEN covered = 1 THEN 1 ELSE 0 END) as covered
        FROM syllabus_coverage_matrix 
        GROUP BY subject 
        ORDER BY subject ASC
    ");
    $subjectStats = [];
    foreach ($stmtSub->fetchAll(PDO::FETCH_ASSOC) as $r) {
        $tot = (int)$r['total'];
        $cov = (int)$r['covered'];
        $subjectStats[$r['subject']] = [
            'total_subtopics' => $tot,
            'covered_subtopics' => $cov,
            'coverage_percentage' => $tot > 0 ? round(($cov / $tot) * 100, 1) : 0
        ];
    }

    echo json_encode([
        'success' => true,
        'overall_coverage_percentage' => $overallPct,
        'total_mandatory_subtopics' => $totalSubtopics,
        'total_covered_subtopics' => $coveredSubtopics,
        'by_subject' => $subjectStats
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
