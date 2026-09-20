<?php
/**
 * Setup structured_lessons table on live cPanel database
 */
require_once __DIR__ . '/db.php';
$pdo = getDbConnection();

if (($_GET['key'] ?? '') !== 'StudyPlug2026') {
    http_response_code(403); echo json_encode(['error' => 'Forbidden']); exit();
}

try {
    $pdo->exec("
    CREATE TABLE IF NOT EXISTS `structured_lessons` (
      `id` INT AUTO_INCREMENT PRIMARY KEY,
      `subject` VARCHAR(100) NOT NULL,
      `topic` VARCHAR(255) NOT NULL,
      `subtopic` VARCHAR(255) DEFAULT NULL,
      `section_order` INT NOT NULL DEFAULT 1,
      `section_type` ENUM('intro', 'concept', 'rule', 'example', 'worked_example', 'exam_trap', 'past_question', 'solution', 'summary') NOT NULL DEFAULT 'concept',
      `section_title` VARCHAR(255) NOT NULL,
      `content` LONGTEXT NOT NULL,
      `examples` TEXT DEFAULT NULL,
      `formulas` TEXT DEFAULT NULL,
      `exam_tips` TEXT DEFAULT NULL,
      `question_ids` TEXT DEFAULT NULL,
      `solutions` LONGTEXT DEFAULT NULL,
      `status` ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'published',
      `version` INT NOT NULL DEFAULT 1,
      `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      KEY `idx_subj_top` (`subject`, `topic`),
      KEY `idx_order` (`subject`, `topic`, `section_order`),
      KEY `idx_status` (`status`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    echo json_encode(['success' => true, 'message' => 'structured_lessons table created successfully']);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
