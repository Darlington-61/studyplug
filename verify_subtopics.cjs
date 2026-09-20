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

async function verify() {
  console.log("=== 1: Speed & Velocity Subtopic ===");
  const sp = await fetchJson("https://eznonews.com.ng/studyplug-api/get_topic_questions.php?subject=Physics&lesson_topic=Motion&subtopic=Speed%20%26%20Velocity&limit=2");
  (sp.questions || []).forEach(q => console.log("[" + q.id + "] [" + q.subtopic + "]: " + q.text.slice(0, 140) + "... (Ans: " + q.correctAnswer + ")"));

  console.log("\n=== 2: Motion Graphs Subtopic ===");
  const mg = await fetchJson("https://eznonews.com.ng/studyplug-api/get_topic_questions.php?subject=Physics&lesson_topic=Motion&subtopic=Motion%20Graphs&limit=2");
  (mg.questions || []).forEach(q => console.log("[" + q.id + "] [" + q.subtopic + "]: " + q.text.slice(0, 140) + "... (Ans: " + q.correctAnswer + ")"));

  console.log("\n=== 3: Circular Motion Subtopic ===");
  const cm = await fetchJson("https://eznonews.com.ng/studyplug-api/get_topic_questions.php?subject=Physics&lesson_topic=Motion&subtopic=Circular%20Motion&limit=2");
  (cm.questions || []).forEach(q => console.log("[" + q.id + "] [" + q.subtopic + "]: " + q.text.slice(0, 140) + "... (Ans: " + q.correctAnswer + ")"));
}

verify();
