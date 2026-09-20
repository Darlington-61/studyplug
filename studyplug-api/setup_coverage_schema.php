<?php
/**
 * StudyPlug — Setup Master Syllabus & Subtopic Coverage Schema
 * key=StudyPlug2026
 */
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/db.php';

if (($_GET['key'] ?? '') !== 'StudyPlug2026') {
    http_response_code(403);
    echo json_encode(['error' => 'Forbidden']);
    exit();
}

$pdo = getDbConnection();

try {
    // 1. Master Topics Table
    $pdo->exec("
    CREATE TABLE IF NOT EXISTS `syllabus_master_topics` (
      `id` INT AUTO_INCREMENT PRIMARY KEY,
      `subject` VARCHAR(100) NOT NULL,
      `topic_number` INT NOT NULL,
      `topic_name` VARCHAR(255) NOT NULL,
      `total_subtopics` INT NOT NULL DEFAULT 0,
      `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY `idx_subj_top` (`subject`, `topic_name`),
      KEY `idx_subj_num` (`subject`, `topic_number`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    // 2. Subtopic Coverage Matrix Table
    $pdo->exec("
    CREATE TABLE IF NOT EXISTS `syllabus_coverage_matrix` (
      `id` INT AUTO_INCREMENT PRIMARY KEY,
      `subject` VARCHAR(100) NOT NULL,
      `topic` VARCHAR(255) NOT NULL,
      `subtopic_code` VARCHAR(60) NOT NULL UNIQUE,
      `subtopic_name` VARCHAR(255) NOT NULL,
      `has_explanation` TINYINT(1) NOT NULL DEFAULT 0,
      `has_example` TINYINT(1) NOT NULL DEFAULT 0,
      `has_past_question` TINYINT(1) NOT NULL DEFAULT 0,
      `has_solution` TINYINT(1) NOT NULL DEFAULT 0,
      `section_order` INT NOT NULL DEFAULT 0,
      `question_ids` TEXT DEFAULT NULL,
      `status` ENUM('NOT_STARTED', 'RESEARCHING', 'DRAFT', 'GENERATED', 'NEEDS_REVIEW', 'APPROVED', 'PUBLISHED') NOT NULL DEFAULT 'NOT_STARTED',
      `covered` TINYINT(1) NOT NULL DEFAULT 0,
      `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      KEY `idx_cov_lookup` (`subject`, `topic`),
      KEY `idx_cov_status` (`covered`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    echo json_encode([
        'success' => true,
        'message' => 'syllabus_master_topics and syllabus_coverage_matrix tables created successfully'
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
