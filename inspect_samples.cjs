const https = require("https");

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, res => {
      let d = "";
      res.on("data", c => d += c);
      res.on("end", () => {
        try {
          resolve(JSON.parse(d));
        } catch(e) {
          resolve({ error: d.slice(0, 300) });
        }
      });
    });
  });
}

async function main() {
  console.log("=== SAMPLE 1: WAEC Physics (Should be ONLY Paper 1 Objectives) ===");
  const p1 = await fetchJson("https://eznonews.com.ng/studyplug-api/get_questions.php?subject=WAEC%20Physics&limit=6");
  (p1.questions || []).forEach((q, i) => {
    console.log(`[${i+1}] ID:${q.id} | Year:${q.year} | Topic:${q.topic}`);
    console.log(`    Subject in DB: ${q.subject}`);
    console.log(`    Opt A: ${q.options[0]?.text}`);
    console.log(`    Text: ${q.text.slice(0, 100)}...\n`);
  });

  console.log("=== SAMPLE 2: WAEC Physics (Theory) ===");
  const p2 = await fetchJson("https://eznonews.com.ng/studyplug-api/get_questions.php?subject=WAEC%20Physics%20(Theory)&limit=2");
  (p2.questions || []).forEach((q, i) => {
    console.log(`[${i+1}] ID:${q.id} | Year:${q.year} | Topic:${q.topic}`);
    console.log(`    Subject in DB: ${q.subject}`);
    console.log(`    Text: ${q.text.slice(0, 100)}...\n`);
  });

  console.log("=== SAMPLE 3: WAEC Physics (Practical) ===");
  const p3 = await fetchJson("https://eznonews.com.ng/studyplug-api/get_questions.php?subject=WAEC%20Physics%20(Practical)&limit=2");
  (p3.questions || []).forEach((q, i) => {
    console.log(`[${i+1}] ID:${q.id} | Year:${q.year} | Topic:${q.topic}`);
    console.log(`    Subject in DB: ${q.subject}`);
    console.log(`    Text: ${q.text.slice(0, 100)}...\n`);
  });
}

main();
