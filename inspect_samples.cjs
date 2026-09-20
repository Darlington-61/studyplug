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
  console.log("=== SAMPLE 1: JAMB Physics Motion Questions ===");
  const p1 = await fetchJson("https://eznonews.com.ng/studyplug-api/get_questions.php?subject=Physics&topic=Motion&limit=4");
  (p1.questions || []).forEach((q, i) => {
    console.log(`[${i+1}] ID:${q.id} | Year:${q.year} | Topic:${q.topic}`);
    console.log(`    Text: ${q.text}`);
    console.log(`    Ans: ${q.correctAnswer} | Expl: ${q.explanation ? q.explanation.slice(0, 100) : "None"}\n`);
  });

  console.log("=== SAMPLE 2: WAEC Physics Questions ===");
  const p2 = await fetchJson("https://eznonews.com.ng/studyplug-api/get_questions.php?subject=WAEC%20Physics&limit=4");
  (p2.questions || []).forEach((q, i) => {
    console.log(`[${i+1}] ID:${q.id} | Year:${q.year} | Topic:${q.topic}`);
    console.log(`    Text: ${q.text.slice(0, 150)}...\n`);
  });

  console.log("=== SAMPLE 3: NECO Physics Questions ===");
  const p3 = await fetchJson("https://eznonews.com.ng/studyplug-api/get_questions.php?subject=NECO%20Physics&limit=4");
  (p3.questions || []).forEach((q, i) => {
    console.log(`[${i+1}] ID:${q.id} | Year:${q.year} | Topic:${q.topic}`);
    console.log(`    Text: ${q.text.slice(0, 150)}...\n`);
  });
}

main();
