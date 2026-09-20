const https = require("https");

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, res => {
      let d = "";
      res.on("data", c => d += c);
      res.on("end", () => {
        try {
          const clean = d.replace(/^\uFEFF/, "").trim();
          resolve(JSON.parse(clean));
        } catch(e) {
          resolve({ error: d.slice(0, 300) });
        }
      });
    });
  });
}

async function main() {
  console.log("=== 1. Motion Topic Overview & Subtopic Breakdown ===");
  const overview = await fetchJson("https://eznonews.com.ng/studyplug-api/get_topic_questions.php?subject=Physics&lesson_topic=Motion&count_only=1");
  console.log("Source:", overview.source);
  console.log("Topic Group:", overview.topic_group);
  console.log("Total Verified Questions:", overview.total);
  console.log("Tiers:", JSON.stringify(overview.tier_counts));
  console.log("Exam Breakdown:", JSON.stringify(overview.by_exam));
  console.log("Subtopic Breakdown:", JSON.stringify(overview.subtopic_breakdown, null, 2));
  console.log("Mechanics Group Total Questions:", overview.group_challenge_count);

  console.log("\n=== 2. Sample 'Acceleration' Subtopic Questions ===");
  const acc = await fetchJson("https://eznonews.com.ng/studyplug-api/get_topic_questions.php?subject=Physics&lesson_topic=Motion&subtopic=Acceleration&limit=3");
  (acc.questions || []).forEach((q, i) => {
    console.log(`[Q${i+1}] ID:${q.id} | Year:${q.year} | Subtopic:${q.subtopic}`);
    console.log(`     Text: ${q.text.slice(0, 160)}...`);
    console.log(`     Secondary: ${JSON.stringify(q.secondaryConcepts)} | Ans:${q.correctAnswer}\n`);
  });

  console.log("\n=== 3. Sample 'Projectiles' Subtopic Questions ===");
  const proj = await fetchJson("https://eznonews.com.ng/studyplug-api/get_topic_questions.php?subject=Physics&lesson_topic=Motion&subtopic=Projectiles&limit=3");
  (proj.questions || []).forEach((q, i) => {
    console.log(`[Q${i+1}] ID:${q.id} | Year:${q.year} | Subtopic:${q.subtopic}`);
    console.log(`     Text: ${q.text.slice(0, 160)}...`);
    console.log(`     Secondary: ${JSON.stringify(q.secondaryConcepts)} | Ans:${q.correctAnswer}\n`);
  });
}

main();
