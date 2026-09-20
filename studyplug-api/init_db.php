<?php
// Database initialization has already been completed and locked.
header("Content-Type: application/json; charset=UTF-8");
echo json_encode(['status' => 'locked', 'message' => 'Database already initialized and secured.']);
