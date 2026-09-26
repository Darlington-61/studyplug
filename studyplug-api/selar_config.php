<?php
/**
 * Study Plug - Selar Integration Configuration
 */

// Secret key to verify incoming Selar webhooks.
// In your Selar dashboard -> Settings / Integrations, enter this same key in the webhook secret/token.
define('SELAR_WEBHOOK_SECRET', 'studyplug_selar_secret_2026_wh');

// Expected Product Codes/Names mapped to StudyPlug Plan Codes
$PLAN_MAPPINGS = [
    'jamb' => 'jamb_premium',
    'waec' => 'waec_premium',
    'neco' => 'neco_premium',
    'all_access' => 'all_access_premium'
];
