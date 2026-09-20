<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-API-Key');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/db.php';
define('IMPORT_API_KEY', 'studyplug_secret_2026');

$headers = getallheaders();
$providedKey = $_GET['api_key'] ?? ($_POST['api_key'] ?? ($headers['X-API-Key'] ?? ($headers['x-api-key'] ?? '')));

if ($providedKey !== IMPORT_API_KEY) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Unauthorized: Invalid api_key']);
    exit();
}

$pdo = getDbConnection();

// Auto-create table
$pdo->exec("
CREATE TABLE IF NOT EXISTS `lesson_notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(100) NOT NULL,
  `exam_type` varchar(50) NOT NULL DEFAULT 'WAEC/NECO/JAMB',
  `class_level` varchar(30) DEFAULT 'SS1-SS3',
  `topic` varchar(255) NOT NULL,
  `subtopic` varchar(255) DEFAULT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  `summary_60s` text DEFAULT NULL,
  `key_formulas` text DEFAULT NULL,
  `content` longtext NOT NULL,
  `pro_tips_95` text DEFAULT NULL,
  `syllabus_objectives` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_subject_topic` (`subject`, `topic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
");

$raw = file_get_contents('php://input');
$notes = json_decode($raw, true);

if (!is_array($notes)) {
    echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    exit();
}

if (isset($notes['subject'])) {
    $notes = [$notes];
}

$checkStmt = $pdo->prepare("SELECT id FROM lesson_notes WHERE subject = :subject AND topic = :topic LIMIT 1");
$updateStmt = $pdo->prepare("
  UPDATE lesson_notes SET
    exam_type = :exam_type,
    class_level = :class_level,
    subtopic = :subtopic,
    image_url = :image_url,
    summary_60s = :summary_60s,
    key_formulas = :key_formulas,
    content = :content,
    pro_tips_95 = :pro_tips_95,
    syllabus_objectives = :syllabus_objectives
  WHERE id = :id
");

$insertStmt = $pdo->prepare("
  INSERT INTO lesson_notes 
    (subject, exam_type, class_level, topic, subtopic, image_url, summary_60s, key_formulas, content, pro_tips_95, syllabus_objectives)
  VALUES
    (:subject, :exam_type, :class_level, :topic, :subtopic, :image_url, :summary_60s, :key_formulas, :content, :pro_tips_95, :syllabus_objectives)
");

$inserted = 0;
$updated = 0;

$pdo->beginTransaction();
try {
    foreach ($notes as $n) {
        $subject = trim($n['subject'] ?? 'Mathematics');
        $topic = trim($n['topic'] ?? '');
        if (empty($topic)) continue;

        $examType = trim($n['exam_type'] ?? 'WAEC/NECO/JAMB');
        $classLevel = trim($n['class_level'] ?? 'SS1-SS3');
        $subtopic = trim($n['subtopic'] ?? '');
        $imageUrl = trim($n['image_url'] ?? '');
        $summary = trim($n['summary_60s'] ?? '');
        $formulas = trim($n['key_formulas'] ?? '');
        $content = trim($n['content'] ?? '');
        $proTips = trim($n['pro_tips_95'] ?? '');
        $objectives = trim($n['syllabus_objectives'] ?? '');

        $checkStmt->execute([':subject' => $subject, ':topic' => $topic]);
        $exist = $checkStmt->fetch();

        if ($exist) {
            $updateStmt->execute([
                ':id' => $exist['id'],
                ':exam_type' => $examType,
                ':class_level' => $classLevel,
                ':subtopic' => $subtopic,
                ':image_url' => $imageUrl ?: null,
                ':summary_60s' => $summary,
                ':key_formulas' => $formulas,
                ':content' => $content,
                ':pro_tips_95' => $proTips,
                ':syllabus_objectives' => $objectives
            ]);
            $updated++;
        } else {
            $insertStmt->execute([
                ':subject' => $subject,
                ':exam_type' => $examType,
                ':class_level' => $classLevel,
                ':topic' => $topic,
                ':subtopic' => $subtopic,
                ':image_url' => $imageUrl ?: null,
                ':summary_60s' => $summary,
                ':key_formulas' => $formulas,
                ':content' => $content,
                ':pro_tips_95' => $proTips,
                ':syllabus_objectives' => $objectives
            ]);
            $inserted++;
        }
    }
    $pdo->commit();
    echo json_encode([
        'success' => true,
        'message' => "Successfully processed " . count($notes) . " notes.",
        'inserted' => $inserted,
        'updated' => $updated
    ]);
} catch (Exception $e) {
    $pdo->rollBack();
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
