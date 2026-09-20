<?php
/**
 * StudyPlug — Intelligent Question Classifier Engine
 * 
 * Inspects questions and populates the `question_topic_mapping` table with:
 *  - Primary Topic
 *  - Subtopic
 *  - Topic Group (e.g. Mechanics, Algebra)
 *  - Secondary Concepts (JSON)
 *  - Match Type ('direct', 'related', 'challenge')
 *  - Confidence ('strong', 'related', 'possible')
 *
 * Query params:
 *  - subject: (default: Physics)
 *  - batch_size: (default: 500)
 *  - offset: (default: 0)
 *  - force: 1 = overwrite existing mapping
 */

require_once __DIR__ . '/db.php';
$pdo = getDbConnection();

if (($_GET['key'] ?? '') !== 'StudyPlug2026') {
    http_response_code(403); echo json_encode(['error' => 'Forbidden']); exit();
}

$subject   = isset($_GET['subject']) ? trim($_GET['subject']) : 'Physics';
$batchSize = isset($_GET['batch_size']) ? min(2000, max(50, (int)$_GET['batch_size'])) : 500;
$offset    = isset($_GET['offset']) ? max(0, (int)$_GET['offset']) : 0;
$force     = isset($_GET['force']) && (int)$_GET['force'] === 1;

// Fetch batch of questions for this subject
$stmt = $pdo->prepare("SELECT id, subject, text, topic, explanation FROM questions WHERE LOWER(subject) LIKE :sub ORDER BY id ASC LIMIT :lim OFFSET :off");
$stmt->bindValue(':sub', '%' . strtolower($subject) . '%');
$stmt->bindValue(':lim', $batchSize, PDO::PARAM_INT);
$stmt->bindValue(':off', $offset, PDO::PARAM_INT);
$stmt->execute();
$questions = $stmt->fetchAll();

if (empty($questions)) {
    echo json_encode(['success' => true, 'message' => 'No more questions in this batch', 'count' => 0]);
    exit();
}

// ─── Domain-Knowledge Classifier Rules ─────────────────────────────────────────

function classifyPhysicsQuestion($text, $rawTopic) {
    $haystack = strtolower($text . ' ' . $rawTopic);
    $rt = strtolower($rawTopic);
    
    // Result structure: array of mappings to create
    $results = [];

    // 1. MOTION (Group: Mechanics)
    // 1a. Projectiles
    if (strpos($rt, 'projectile') !== false || preg_match('/\b(projectile|horizontal range|maximum height|trajectory|angle of projection|time of flight)\b/', $haystack)) {
        $results[] = [
            'topic_group' => 'Mechanics',
            'primary_topic' => 'Motion',
            'subtopic' => 'Projectiles',
            'secondary' => ['Equations of Motion', 'Gravitational Field'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }
    // 1b. Circular Motion
    elseif (strpos($rt, 'circular motion') !== false || preg_match('/\b(centripetal|angular velocity|angular speed|angular acceleration|whirled in a horizontal circle|banking of roads)\b/', $haystack)) {
        $results[] = [
            'topic_group' => 'Mechanics',
            'primary_topic' => 'Motion',
            'subtopic' => 'Circular Motion',
            'secondary' => ['Force', 'Acceleration'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }
    // 1c. Motion Graphs
    elseif (strpos($rt, 'motion & graphs') !== false || preg_match('/\b(velocity-time graph|speed-time graph|displacement-time|area under the.*graph|slope of the.*graph)\b/', $haystack)) {
        $results[] = [
            'topic_group' => 'Mechanics',
            'primary_topic' => 'Motion',
            'subtopic' => 'Motion Graphs',
            'secondary' => ['Distance & Displacement', 'Acceleration'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }
    // 1d. Acceleration & Deceleration
    elseif (preg_match('/\b(acceleration|accelerates|accelerating|deceleration|retardation|uniform acceleration|rate of change of velocity)\b/', $haystack)) {
        $results[] = [
            'topic_group' => 'Mechanics',
            'primary_topic' => 'Motion',
            'subtopic' => 'Acceleration',
            'secondary' => ['Speed & Velocity', 'Equations of Motion'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }
    // 1e. Speed & Velocity
    elseif (preg_match('/\b(average speed|uniform speed|uniform velocity|relative velocity|velocity of a|terminal velocity)\b/', $haystack)) {
        $results[] = [
            'topic_group' => 'Mechanics',
            'primary_topic' => 'Motion',
            'subtopic' => 'Speed & Velocity',
            'secondary' => ['Distance & Displacement'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }
    // 1f. General Linear Motion & Equations
    elseif (strpos($rt, 'motion') !== false || preg_match('/\b(distance travelled|displacement of|straight line with constant|from rest and travels)\b/', $haystack)) {
        $results[] = [
            'topic_group' => 'Mechanics',
            'primary_topic' => 'Motion',
            'subtopic' => 'Equations of Motion',
            'secondary' => ['Acceleration', 'Distance & Displacement'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }

    // 2. WORK, ENERGY & POWER (Group: Mechanics)
    if (strpos($rt, 'work') !== false || strpos($rt, 'energy') !== false || preg_match('/\b(kinetic energy|potential energy|conservation of energy|mechanical energy|work done by|power output|pulley system.*efficiency|watt.*joule)\b/', $haystack)) {
        $isDirect = preg_match('/\b(kinetic energy|potential energy|work done|power)\b/', $haystack);
        $results[] = [
            'topic_group' => 'Mechanics',
            'primary_topic' => 'Work, Energy and Power',
            'subtopic' => (strpos($haystack, 'kinetic') !== false) ? 'Kinetic Energy' : ((strpos($haystack, 'potential') !== false) ? 'Potential Energy' : 'Work Done & Power'),
            'secondary' => ['Motion', 'Force'],
            'match_type' => $isDirect ? 'direct' : 'related',
            'confidence' => $isDirect ? 'strong' : 'related'
        ];
    }

    // 3. WAVES & SOUND (Group: Waves & Optics)
    if (strpos($rt, 'wave') !== false || strpos($rt, 'sound') !== false || strpos($rt, 'echo') !== false || strpos($rt, 'resonance') !== false || preg_match('/\b(wavelength|frequency of|transverse wave|longitudinal wave|diffraction|refraction of sound|resonance tube|beats per second|doppler effect|vibrating tuning fork|pitch of a|echo sounder)\b/', $haystack)) {
        $sub = 'Wave Motion';
        if (preg_match('/\b(echo|tuning fork|beats|sound pulse|pitch|loudness|acoustics)\b/', $haystack)) $sub = 'Sound Waves & Echoes';
        elseif (preg_match('/\b(transverse|longitudinal|polarization|interference|diffraction)\b/', $haystack)) $sub = 'Wave Properties & Types';
        elseif (preg_match('/\b(simple pendulum|period of oscillation|simple harmonic motion|shm)\b/', $haystack)) $sub = 'Simple Harmonic Motion';

        $results[] = [
            'topic_group' => 'Waves & Optics',
            'primary_topic' => 'Waves',
            'subtopic' => $sub,
            'secondary' => ['Simple Harmonic Motion'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }

    // 4. CURRENT ELECTRICITY (Group: Electricity & Magnetism)
    if (strpos($rt, 'current electricity') !== false || strpos($rt, 'resistor') !== false || preg_match('/\b(resistors connected in|equivalent resistance|ohm\'s law|internal resistance|electromotive force|emf of|potential difference across|galvanometer.*ammeter|shunt resistor|wheatstone bridge|potentiometer)\b/', $haystack)) {
        $sub = 'Ohm\'s Law & Resistance';
        if (strpos($haystack, 'internal resistance') !== false || strpos($haystack, 'emf') !== false) $sub = 'EMF & Internal Resistance';
        elseif (strpos($haystack, 'parallel') !== false || strpos($haystack, 'series') !== false) $sub = 'Resistor Networks';
        elseif (strpos($haystack, 'galvanometer') !== false || strpos($haystack, 'potentiometer') !== false) $sub = 'Meters & Measuring Instruments';

        $results[] = [
            'topic_group' => 'Electricity & Magnetism',
            'primary_topic' => 'Current Electricity',
            'subtopic' => $sub,
            'secondary' => ['Electric Power'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }

    // 5. ELECTROSTATICS (Group: Electricity & Magnetism)
    if (strpos($rt, 'electrostatic') !== false || strpos($rt, 'capacitor') !== false || preg_match('/\b(coulomb\'s law|point charges|capacitance|capacitors in|dielectric|electric field intensity|electric potential)\b/', $haystack)) {
        $sub = (strpos($haystack, 'capacitor') !== false) ? 'Capacitors' : 'Coulomb\'s Law & Electric Fields';
        $results[] = [
            'topic_group' => 'Electricity & Magnetism',
            'primary_topic' => 'Electrostatics',
            'subtopic' => $sub,
            'secondary' => ['Electric Potential'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }

    // 6. GAS LAWS & THERMAL PHYSICS (Group: Thermal Physics)
    if (strpos($rt, 'gas laws') !== false || preg_match('/\b(boyle\'s law|charles\'s law|pressure law|ideal gas|pv = nrt|volume of a fixed mass of gas|isothermal|isobaric|kelvin temperature)\b/', $haystack)) {
        $sub = (strpos($haystack, 'charles') !== false) ? 'Charles\'s Law' : ((strpos($haystack, 'boyle') !== false) ? 'Boyle\'s Law' : 'General Gas Laws');
        $results[] = [
            'topic_group' => 'Thermal Physics',
            'primary_topic' => 'Gas Laws',
            'subtopic' => $sub,
            'secondary' => ['Kinetic Theory of Matter'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }

    // 7. ELECTROMAGNETIC INDUCTION (Group: Electricity & Magnetism)
    if (strpos($rt, 'electromagnetic induction') !== false || preg_match('/\b(faraday\'s law|lenz\'s law|transformer.*turns|step-up transformer|mutual induction|induced current|ac generator)\b/', $haystack)) {
        $sub = (strpos($haystack, 'transformer') !== false) ? 'Transformers' : 'Faraday & Lenz Laws';
        $results[] = [
            'topic_group' => 'Electricity & Magnetism',
            'primary_topic' => 'Electromagnetic Induction',
            'subtopic' => $sub,
            'secondary' => ['Magnetic Fields'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }

    // 8. PRESSURE IN FLUIDS & HYDROSTATICS (Group: Mechanics)
    if (strpos($rt, 'hydrostatic') !== false || preg_match('/\b(archimedes|upthrust|relative density|density of the milk|hydrometer|floating|barometer|atmospheric pressure|manometer)\b/', $haystack)) {
        $sub = (strpos($haystack, 'upthrust') !== false || strpos($haystack, 'archimedes') !== false) ? 'Archimedes Principle & Floatation' : 'Liquid Pressure & Density';
        $results[] = [
            'topic_group' => 'Mechanics',
            'primary_topic' => 'Pressure',
            'subtopic' => $sub,
            'secondary' => ['Density', 'Upthrust'],
            'match_type' => 'direct',
            'confidence' => 'strong'
        ];
    }

    return $results;
}

// ─── Run batch classification ──────────────────────────────────────────────────
$inserted = 0;
$skipped = 0;

$insStmt = $pdo->prepare("
    INSERT INTO question_topic_mapping 
      (question_id, subject, topic_group, primary_topic, subtopic, secondary_concepts, match_type, confidence, is_verified)
    VALUES 
      (:qid, :sub, :grp, :pri, :subt, :sec, :mt, :conf, 1)
    ON DUPLICATE KEY UPDATE 
      match_type = VALUES(match_type), confidence = VALUES(confidence), topic_group = VALUES(topic_group)
");

foreach ($questions as $q) {
    $mappings = classifyPhysicsQuestion($q['text'], $q['topic'] ?: '');
    foreach ($mappings as $m) {
        $insStmt->execute([
            ':qid'  => $q['id'],
            ':sub'  => 'Physics',
            ':grp'  => $m['topic_group'],
            ':pri'  => $m['primary_topic'],
            ':subt' => $m['subtopic'],
            ':sec'  => json_encode($m['secondary']),
            ':mt'   => $m['match_type'],
            ':conf' => $m['confidence'],
        ]);
        if ($insStmt->rowCount() > 0) $inserted++;
        else $skipped++;
    }
}

echo json_encode([
    'success'       => true,
    'subject'       => $subject,
    'batch_size'    => count($questions),
    'next_offset'   => $offset + $batchSize,
    'inserted'      => $inserted,
    'skipped'       => $skipped
], JSON_PRETTY_PRINT);
