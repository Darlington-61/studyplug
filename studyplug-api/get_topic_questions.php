<?php
/**
 * StudyPlug — Tiered Question Engine (v3 - Multi-Tier Topic & Subtopic Mapping)
 *
 * Provides:
 *  1. Direct Past Questions (strongly matched to exact topic/subtopic)
 *  2. Related Concept Questions
 *  3. Topic Group Mixed Challenges (e.g. Mechanics, Algebra)
 *  4. Subtopic Breakdown Counts
 *  5. Direct Subtopic Filtering
 */

require_once __DIR__ . '/db.php';
$pdo = getDbConnection();

$subject     = isset($_GET['subject'])      ? trim($_GET['subject'])      : 'Physics';
$lessonTopic = isset($_GET['lesson_topic']) ? trim($_GET['lesson_topic']) : '';
$subtopic    = isset($_GET['subtopic'])     ? trim($_GET['subtopic'])     : '';
$matchTier   = isset($_GET['tier'])         ? trim($_GET['tier'])         : 'direct'; // 'direct' | 'related' | 'challenge' | 'all'
$examFilter  = isset($_GET['exam'])         ? trim($_GET['exam'])         : 'all';
$limit       = isset($_GET['limit'])        ? max(1, min(100, (int)$_GET['limit'])) : 20;
$offset      = isset($_GET['offset'])       ? max(0, (int)$_GET['offset']) : 0;
$random      = isset($_GET['random'])       && (int)$_GET['random'] === 1;
$countOnly   = isset($_GET['count_only'])   && (int)$_GET['count_only'] === 1;

if (empty($lessonTopic)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'lesson_topic is required']);
    exit();
}

// ─── 1. Check if we have pre-classified mappings in `question_topic_mapping` ──
$whereMap = ['LOWER(m.subject) LIKE :sub', 'LOWER(m.primary_topic) = LOWER(:topic)'];
$paramsMap = [':sub' => '%' . strtolower($subject) . '%', ':topic' => $lessonTopic];

if (!empty($subtopic)) {
    $whereMap[] = 'LOWER(m.subtopic) LIKE :subt';
    $paramsMap[':subt'] = '%' . strtolower($subtopic) . '%';
}

if ($matchTier !== 'all') {
    $whereMap[] = 'm.match_type = :tier';
    $paramsMap[':tier'] = $matchTier;
}

$whereMapSql = implode(' AND ', $whereMap);

// Count from question_topic_mapping
$classifiedCount = 0;
try {
    $cStmt = $pdo->prepare("SELECT COUNT(*) FROM question_topic_mapping m WHERE {$whereMapSql} AND m.confidence IN ('strong', 'related')");
    foreach ($paramsMap as $k => $v) $cStmt->bindValue($k, $v);
    $cStmt->execute();
    $classifiedCount = (int)$cStmt->fetchColumn();
} catch (PDOException $e) {}

// If we have classified mappings, use the fast indexed path!
if ($classifiedCount > 0) {
    // Breakdown by subtopic
    $subtopicCounts = [];
    $tierCounts = ['direct' => 0, 'related' => 0, 'challenge' => 0];
    $examCounts = ['JAMB' => 0, 'WAEC' => 0, 'NECO' => 0];
    $topicGroup = '';

    try {
        $stStmt = $pdo->prepare("
            SELECT m.subtopic, m.match_type, m.topic_group, q.subject as q_subj, COUNT(*) as cnt
            FROM question_topic_mapping m
            JOIN questions q ON m.question_id = q.id
            WHERE LOWER(m.subject) LIKE :sub AND LOWER(m.primary_topic) = LOWER(:topic)
            GROUP BY m.subtopic, m.match_type, m.topic_group, q.subject
        ");
        $stStmt->execute([':sub' => '%' . strtolower($subject) . '%', ':topic' => $lessonTopic]);
        foreach ($stStmt->fetchAll() as $r) {
            if ($r['subtopic']) {
                $subtopicCounts[$r['subtopic']] = ($subtopicCounts[$r['subtopic']] ?? 0) + (int)$r['cnt'];
            }
            $tierCounts[$r['match_type']] = ($tierCounts[$r['match_type']] ?? 0) + (int)$r['cnt'];
            if (!$topicGroup && $r['topic_group']) $topicGroup = $r['topic_group'];

            $sName = strtolower($r['q_subj']);
            $c = (int)$r['cnt'];
            if (strpos($sName, 'neco') !== false) $examCounts['NECO'] += $c;
            elseif (strpos($sName, 'waec') !== false) $examCounts['WAEC'] += $c;
            else $examCounts['JAMB'] += $c;
        }
    } catch (PDOException $e) {}

    // Group challenge count (e.g. All Mechanics questions)
    $groupChallengeCount = 0;
    if ($topicGroup) {
        try {
            $gStmt = $pdo->prepare("SELECT COUNT(DISTINCT question_id) FROM question_topic_mapping WHERE topic_group = :grp");
            $gStmt->execute([':grp' => $topicGroup]);
            $groupChallengeCount = (int)$gStmt->fetchColumn();
        } catch (PDOException $e) {}
    }

    if ($countOnly) {
        echo json_encode([
            'success'               => true,
            'source'                => 'classified_index',
            'lesson_topic'          => $lessonTopic,
            'subtopic'              => $subtopic ?: null,
            'topic_group'           => $topicGroup,
            'total'                 => $classifiedCount,
            'tier_counts'           => $tierCounts,
            'by_exam'               => $examCounts,
            'subtopic_breakdown'    => $subtopicCounts,
            'group_challenge_count' => $groupChallengeCount,
        ], JSON_UNESCAPED_UNICODE);
        exit();
    }

    // Fetch questions from mapping table
    $orderSql = $random ? 'ORDER BY RAND()' : 'ORDER BY q.exam_year DESC, q.question_num ASC';
    $qStmt = $pdo->prepare("
        SELECT q.id, q.subject, q.exam_year, q.question_num, q.text, q.image_url, q.image_svg,
               q.option_a, q.option_b, q.option_c, q.option_d, q.correct_answer, q.explanation,
               m.subtopic, m.topic_group, m.match_type, m.secondary_concepts
        FROM question_topic_mapping m
        JOIN questions q ON m.question_id = q.id
        WHERE {$whereMapSql} AND m.confidence IN ('strong', 'related')
        {$orderSql}
        LIMIT :lim OFFSET :off
    ");
    foreach ($paramsMap as $k => $v) $qStmt->bindValue($k, $v);
    $qStmt->bindValue(':lim', $limit, PDO::PARAM_INT);
    $qStmt->bindValue(':off', $offset, PDO::PARAM_INT);
    $qStmt->execute();

    $questions = [];
    foreach ($qStmt->fetchAll() as $i => $r) {
        $questions[] = [
            'id'                => (int)$r['id'],
            'questionNumber'    => (int)($r['question_num'] ?: ($offset + $i + 1)),
            'subject'           => $r['subject'],
            'year'              => (int)$r['exam_year'],
            'topic'             => $lessonTopic,
            'subtopic'          => $r['subtopic'] ?: 'General',
            'topicGroup'        => $r['topic_group'] ?: '',
            'matchType'         => $r['match_type'] ?: 'direct',
            'secondaryConcepts' => json_decode($r['secondary_concepts'] ?: '[]', true),
            'text'              => $r['text'],
            'imageUrl'          => $r['image_url'] ?: null,
            'imageSvg'          => $r['image_svg'] ?: null,
            'options'           => [
                ['key' => 'A', 'text' => $r['option_a']],
                ['key' => 'B', 'text' => $r['option_b']],
                ['key' => 'C', 'text' => $r['option_c']],
                ['key' => 'D', 'text' => $r['option_d']],
            ],
            'correctAnswer'     => strtoupper(trim($r['correct_answer'])),
            'explanation'       => $r['explanation'] ?: '',
        ];
    }

    echo json_encode([
        'success'               => true,
        'source'                => 'classified_index',
        'lesson_topic'          => $lessonTopic,
        'subtopic'              => $subtopic ?: null,
        'topic_group'           => $topicGroup,
        'total'                 => $classifiedCount,
        'returned'              => count($questions),
        'offset'                => $offset,
        'tier_counts'           => $tierCounts,
        'by_exam'               => $examCounts,
        'subtopic_breakdown'    => $subtopicCounts,
        'group_challenge_count' => $groupChallengeCount,
        'questions'             => $questions,
    ], JSON_UNESCAPED_UNICODE);
    exit();
}

// ─── Fallback Path (if mapping not yet generated for this subject) ─────────────
// (Performs precise topic column lookup)
$w = ['LOWER(subject) LIKE :sub', 'LOWER(topic) LIKE :top'];
$p = [':sub' => '%' . strtolower($subject) . '%', ':top' => '%' . strtolower($lessonTopic) . '%'];

$wsql = implode(' AND ', $w);
$count = 0;
try {
    $cs = $pdo->prepare("SELECT COUNT(*) FROM questions WHERE {$wsql}");
    foreach ($p as $k => $v) $cs->bindValue($k, $v);
    $cs->execute();
    $count = (int)$cs->fetchColumn();
} catch (PDOException $e) {}

if ($countOnly) {
    echo json_encode([
        'success'      => true,
        'source'       => 'fallback',
        'lesson_topic' => $lessonTopic,
        'total'        => $count,
        'tier_counts'  => ['direct' => $count, 'related' => 0, 'challenge' => 0],
        'by_exam'      => ['JAMB' => $count, 'WAEC' => 0, 'NECO' => 0],
    ], JSON_UNESCAPED_UNICODE);
    exit();
}

$ord = $random ? 'ORDER BY RAND()' : 'ORDER BY exam_year DESC, question_num ASC';
$qs = $pdo->prepare("SELECT * FROM questions WHERE {$wsql} {$ord} LIMIT :lim OFFSET :off");
foreach ($p as $k => $v) $qs->bindValue($k, $v);
$qs->bindValue(':lim', $limit, PDO::PARAM_INT);
$qs->bindValue(':off', $offset, PDO::PARAM_INT);
$qs->execute();

$questions = [];
foreach ($qs->fetchAll() as $i => $r) {
    $questions[] = [
        'id'             => (int)$r['id'],
        'questionNumber' => (int)($r['question_num'] ?: ($offset + $i + 1)),
        'subject'        => $r['subject'],
        'year'           => (int)$r['exam_year'],
        'topic'          => $r['topic'] ?: 'General',
        'subtopic'       => 'General',
        'matchType'      => 'direct',
        'text'           => $r['text'],
        'options'        => [
            ['key' => 'A', 'text' => $r['option_a']],
            ['key' => 'B', 'text' => $r['option_b']],
            ['key' => 'C', 'text' => $r['option_c']],
            ['key' => 'D', 'text' => $r['option_d']],
        ],
        'correctAnswer'  => strtoupper(trim($r['correct_answer'])),
        'explanation'    => $r['explanation'] ?: '',
    ];
}

echo json_encode([
    'success'      => true,
    'source'       => 'fallback',
    'lesson_topic' => $lessonTopic,
    'total'        => $count,
    'returned'     => count($questions),
    'questions'    => $questions,
], JSON_UNESCAPED_UNICODE);
