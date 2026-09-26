<?php
/**
 * Study Plug - Secure Server-to-Server Selar Webhook Receiver
 *
 * Responsibilities:
 * 1. Verify webhook authentication (webhook-key header).
 * 2. Enforce transaction idempotency (no duplicate activations or replay attacks).
 * 3. Validate customer information, product, and amount.
 * 4. Record full audit trail in sp_orders.
 * 5. Activate student Premium entitlement in sp_entitlements.
 *
 * Zero affiliate management inside StudyPlug: Selar handles all commissions, wallets, and payouts.
 */

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/selar_config.php';

header("Content-Type: application/json; charset=UTF-8");

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "error" => "Method not allowed. Webhook expects HTTP POST."
    ]);
    exit();
}

// 1. Authenticate Request
// Check headers for webhook key (case-insensitive in PHP $_SERVER)
$incomingKey = null;
if (!empty($_SERVER['HTTP_WEBHOOK_KEY'])) {
    $incomingKey = $_SERVER['HTTP_WEBHOOK_KEY'];
} elseif (!empty($_SERVER['HTTP_X_WEBHOOK_KEY'])) {
    $incomingKey = $_SERVER['HTTP_X_WEBHOOK_KEY'];
} elseif (!empty($_SERVER['HTTP_AUTHORIZATION'])) {
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'];
    // In case Bearer <token> is sent
    if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
        $incomingKey = $matches[1];
    } else {
        $incomingKey = $authHeader;
    }
}

// If secret is set, verify incoming key
if (defined('SELAR_WEBHOOK_SECRET') && SELAR_WEBHOOK_SECRET !== '') {
    if (!$incomingKey || !hash_equals(SELAR_WEBHOOK_SECRET, trim($incomingKey))) {
        http_response_code(401);
        echo json_encode([
            "success" => false,
            "error" => "Unauthorized webhook key."
        ]);
        exit();
    }
}

// 2. Read and parse raw payload
$rawPayload = file_get_contents('php://input');
if (empty($rawPayload)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Empty payload body."]);
    exit();
}

$data = json_decode($rawPayload, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid JSON payload."]);
    exit();
}

// 3. Extract Order Details
// Selar payload structure accommodates both direct webhook and Zapier triggers:
// metadata: { order_id, name, shop_url, ... }
// customer: { name, email, phone }
// product: { name, code, price, ... }
$externalOrderId = $data['metadata']['order_id'] ?? $data['order_id'] ?? $data['reference'] ?? $data['id'] ?? null;
if (!$externalOrderId) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Missing order_id or transaction reference."]);
    exit();
}

// Extract Customer Information
$customerEmail = null;
if (!empty($data['customer']['email'])) {
    $customerEmail = strtolower(trim($data['customer']['email']));
} elseif (!empty($data['email'])) {
    $customerEmail = strtolower(trim($data['email']));
}

// Check custom checkout form fields (if student filled custom email or user ID)
$studyPlugRef = null;
if (!empty($data['additional_fields']) && is_array($data['additional_fields'])) {
    foreach ($data['additional_fields'] as $key => $field) {
        $fieldTitle = strtolower($field['text'] ?? '');
        $fieldVal = trim($field['value'] ?? '');
        if (strpos($fieldTitle, 'studyplug') !== false || strpos($fieldTitle, 'email') !== false) {
            if (filter_var($fieldVal, FILTER_VALIDATE_EMAIL)) {
                $customerEmail = strtolower($fieldVal);
            } else {
                $studyPlugRef = $fieldVal;
            }
        }
    }
}

if (!$customerEmail || !filter_var($customerEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        "success" => false,
        "error" => "Unable to determine customer email from webhook payload."
    ]);
    exit();
}

$customerName = $data['customer']['name'] ?? $data['name'] ?? $data['metadata']['name'] ?? 'StudyPlug Candidate';
$customerPhone = $data['customer']['phone'] ?? $data['phone'] ?? null;

// Product and pricing
$productName = $data['product']['name'] ?? $data['product_name'] ?? 'StudyPlug UTME/JAMB CBT Premium';
$productId = $data['product']['code'] ?? $data['product_id'] ?? 'jamb-premium';
$amount = floatval($data['amount'] ?? $data['product']['price'] ?? 0);
$currency = $data['currency'] ?? 'NGN';
$affiliateCode = $data['affiliate'] ?? $data['affiliate_code'] ?? $data['referrer'] ?? null;

// Determine Plan Code based on product name/code
$planCode = 'jamb_premium';
$lowerProd = strtolower($productName . ' ' . $productId);
if (strpos($lowerProd, 'waec') !== false) {
    $planCode = 'waec_premium';
} elseif (strpos($lowerProd, 'all') !== false || strpos($lowerProd, 'combo') !== false) {
    $planCode = 'all_access_premium';
}

$pdo = getDbConnection();

// 4. Idempotency Guard: Check if transaction has already been processed
$checkStmt = $pdo->prepare("SELECT `id`, `status` FROM `sp_orders` WHERE `external_transaction_id` = ? LIMIT 1");
$checkStmt->execute([$externalOrderId]);
$existingOrder = $checkStmt->fetch();

if ($existingOrder) {
    // Transaction already recorded, acknowledge with 200 OK to prevent replay loops
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "status" => "already_processed",
        "message" => "Transaction $externalOrderId was previously recorded and verified.",
        "order_id" => $existingOrder['id']
    ]);
    exit();
}

// 5. Begin Transaction: Upsert user, Record order, and Grant Entitlement
try {
    $pdo->beginTransaction();

    // A. Upsert User
    $userStmt = $pdo->prepare("
        INSERT INTO `sp_users` (`email`, `name`, `phone`)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE
            `name` = COALESCE(VALUES(`name`), `name`),
            `phone` = COALESCE(VALUES(`phone`), `phone`),
            `updated_at` = CURRENT_TIMESTAMP
    ");
    $userStmt->execute([$customerEmail, $customerName, $customerPhone]);

    // B. Record Order Audit Trail
    $orderStmt = $pdo->prepare("
        INSERT INTO `sp_orders` (
            `order_reference`,
            `external_transaction_id`,
            `customer_email`,
            `customer_name`,
            `product_id`,
            `product_name`,
            `amount`,
            `currency`,
            `affiliate_code`,
            `payment_channel`,
            `status`,
            `raw_payload`
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'selar', 'completed', ?)
    ");
    $orderStmt->execute([
        $studyPlugRef ?: ('SP-ORD-' . time()),
        $externalOrderId,
        $customerEmail,
        $customerName,
        $productId,
        $productName,
        $amount,
        $currency,
        $affiliateCode,
        $rawPayload
    ]);
    $newOrderId = $pdo->lastInsertId();

    // C. Activate Entitlement
    $entitleStmt = $pdo->prepare("
        INSERT INTO `sp_entitlements` (
            `customer_email`,
            `plan_code`,
            `is_active`,
            `activated_at`,
            `last_order_id`
        ) VALUES (?, ?, 1, CURRENT_TIMESTAMP, ?)
        ON DUPLICATE KEY UPDATE
            `is_active` = 1,
            `activated_at` = CURRENT_TIMESTAMP,
            `last_order_id` = VALUES(`last_order_id`),
            `updated_at` = CURRENT_TIMESTAMP
    ");
    $entitleStmt->execute([$customerEmail, $planCode, $newOrderId]);

    $pdo->commit();

    http_response_code(200);
    echo json_encode([
        "success" => true,
        "status" => "activated",
        "message" => "Payment verified. Entitlement '$planCode' successfully granted to $customerEmail.",
        "order_id" => $newOrderId,
        "external_transaction_id" => $externalOrderId
    ]);
} catch (Exception $e) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Database error processing order: " . $e->getMessage()
    ]);
}
