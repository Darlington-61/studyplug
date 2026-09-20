<?php
/**
 * Study Plug - Get Available Years API
 */

require_once __DIR__ . '/db.php';

$pdo = getDbConnection();

$subject = isset($_GET['subject']) ? trim($_GET['subject']) : 'Physics';

$sql = "SELECT exam_year, COUNT(*) as total_questions
        FROM questions
        WHERE LOWER(subject) = LOWER(:subject)
        GROUP BY exam_year
        ORDER BY exam_year DESC";

try {
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':subject' => $subject]);
    $rows = $stmt->fetchAll();

    $years = [];
    foreach ($rows as $row) {
        $years[] = [
            'year'  => (int)$row['exam_year'],
            'total' => (int)$row['total_questions']
        ];
    }

    echo json_encode([
        'success' => true,
        'subject' => $subject,
        'years'   => $years
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Query failed: ' . $e->getMessage()
    ]);
}
