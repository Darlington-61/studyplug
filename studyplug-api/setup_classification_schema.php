<?php
/**
 * Setup question_topic_mapping table
 */
require_once __DIR__ . '/db.php';
$pdo = getDbConnection();

if (($_GET['key'] ?? '') !== 'StudyPlug2026') {
    http_response_code(403); echo json_encode(['error' => 'Forbidden']); exit();
}

try {
    $pdo->exec("CREATE TABLE IF NOT EXISTS `question_topic_mapping` (
      `id` INT AUTO_INCREMENT PRIMARY KEY,
      `question_id` INT NOT NULL,
      `subject` VARCHAR(50) NOT NULL,
      `topic_group` VARCHAR(100) DEFAULT NULL,
      `primary_topic` VARCHAR(150) NOT NULL,
      `subtopic` VARCHAR(150) DEFAULT NULL,
      `secondary_concepts` TEXT DEFAULT NULL,
      `match_type` ENUM('direct', 'related', 'challenge') DEFAULT 'direct',
      `confidence` ENUM('strong', 'related', 'possible') DEFAULT 'strong',
      `is_verified` TINYINT(1) DEFAULT 0,
      `reviewed_by` VARCHAR(50) DEFAULT NULL,
      `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY `idx_q_topic` (`question_id`, `primary_topic`, `subtopic`),
      KEY `idx_lookup` (`subject`, `primary_topic`, `confidence`),
      KEY `idx_subtopic` (`subject`, `primary_topic`, `subtopic`, `confidence`),
      KEY `idx_group` (`subject`, `topic_group`),
      KEY `idx_qid` (`question_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");

    echo json_encode(['success' => true, 'message' => 'question_topic_mapping table ready']);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
