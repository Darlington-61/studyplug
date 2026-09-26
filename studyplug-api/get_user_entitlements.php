<?php
/**
 * Study Plug - Get User Entitlements API
 * Checks active premium plans for a candidate based on verified email.
 */

require_once __DIR__ . '/db.php';

header("Content-Type: application/json; charset=UTF-8");

$email = isset($_GET['email']) ? strtolower(trim($_GET['email'])) : '';

if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "Valid email query parameter required (e.g. ?email=candidate@gmail.com)"
    ]);
    exit();
}

$pdo = getDbConnection();

try {
    // 1. Fetch active entitlements
    $stmt = $pdo->prepare("
        SELECT `plan_code`, `is_active`, `activated_at`, `expires_at`
        FROM `sp_entitlements`
        WHERE `customer_email` = ? AND `is_active` = 1
    ");
    $stmt->execute([$email]);
    $entitlements = $stmt->fetchAll();

    // 2. Fetch user profile if exists
    $userStmt = $pdo->prepare("SELECT `name`, `created_at` FROM `sp_users` WHERE `email` = ? LIMIT 1");
    $userStmt->execute([$email]);
    $user = $userStmt->fetch();

    $activePlans = [];
    $isPremium = false;
    foreach ($entitlements as $ent) {
        $activePlans[] = $ent['plan_code'];
        $isPremium = true;
    }

    echo json_encode([
        "success" => true,
        "email" => $email,
        "name" => $user ? $user['name'] : null,
        "is_premium" => $isPremium,
        "active_plans" => $activePlans,
        "entitlements" => $entitlements
    ], JSON_PRETTY_PRINT);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Query failed: " . $e->getMessage()
    ]);
}
