<?php
/**
 * Study Plug - Setup Orders & Entitlements Schema
 * Idempotently creates tables for external checkout, webhook verification, and entitlement tracking.
 */

require_once __DIR__ . '/db.php';

$pdo = getDbConnection();

$queries = [
    // 1. Users Table
    "CREATE TABLE IF NOT EXISTS `sp_users` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `email` VARCHAR(191) NOT NULL UNIQUE,
        `name` VARCHAR(191) DEFAULT NULL,
        `phone` VARCHAR(64) DEFAULT NULL,
        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX `idx_email` (`email`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",

    // 2. Orders Table (Immutable & Idempotent Audit Log)
    "CREATE TABLE IF NOT EXISTS `sp_orders` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `order_reference` VARCHAR(128) DEFAULT NULL,
        `external_transaction_id` VARCHAR(191) NOT NULL UNIQUE,
        `customer_email` VARCHAR(191) NOT NULL,
        `customer_name` VARCHAR(191) DEFAULT NULL,
        `product_id` VARCHAR(128) DEFAULT NULL,
        `product_name` VARCHAR(255) DEFAULT NULL,
        `amount` DECIMAL(10, 2) DEFAULT 0.00,
        `currency` VARCHAR(16) DEFAULT 'NGN',
        `affiliate_code` VARCHAR(128) DEFAULT NULL,
        `payment_channel` VARCHAR(64) DEFAULT 'selar',
        `status` ENUM('completed', 'reversed', 'pending') DEFAULT 'completed',
        `raw_payload` LONGTEXT DEFAULT NULL,
        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX `idx_cust_email` (`customer_email`),
        INDEX `idx_ext_trans` (`external_transaction_id`),
        INDEX `idx_order_ref` (`order_reference`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",

    // 3. Entitlements Table (Permissions Grant)
    "CREATE TABLE IF NOT EXISTS `sp_entitlements` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `customer_email` VARCHAR(191) NOT NULL,
        `plan_code` VARCHAR(64) NOT NULL DEFAULT 'jamb_premium',
        `is_active` TINYINT(1) NOT NULL DEFAULT 1,
        `activated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        `expires_at` TIMESTAMP NULL DEFAULT NULL,
        `last_order_id` INT DEFAULT NULL,
        `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY `uniq_user_plan` (`customer_email`, `plan_code`),
        INDEX `idx_active_email` (`customer_email`, `is_active`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;"
];

$results = [];
foreach ($queries as $idx => $sql) {
    try {
        $pdo->exec($sql);
        $results[] = ["step" => $idx + 1, "status" => "success"];
    } catch (PDOException $e) {
        $results[] = ["step" => $idx + 1, "status" => "error", "message" => $e->getMessage()];
    }
}

echo json_encode([
    "success" => true,
    "message" => "Orders, Users, and Entitlements schema initialized successfully.",
    "details" => $results
], JSON_PRETTY_PRINT);
