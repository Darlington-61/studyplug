const https = require("https");
const querystring = require("querystring");
const fs = require("fs");

function cpanelRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let body = "";
      const setCookies = res.headers["set-cookie"];
      res.on("data", chunk => (body += chunk));
      res.on("end", () => resolve({ statusCode: res.statusCode, body, setCookies }));
    });
    req.on("error", reject);
    if (postData) req.write(postData);
    req.end();
  });
}

let token = "", cookie = "";

async function login() {
  const pd = querystring.stringify({ user: "ooezylpj", pass: "M23risM3r+6YQ*" });
  const r = await cpanelRequest({ hostname: "156.232.88.10", port: 2083, path: "/login/?login_only=1", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "Content-Length": Buffer.byteLength(pd) }, rejectUnauthorized: false }, pd);
  const j = JSON.parse(r.body);
  token = j.security_token;
  cookie = (r.setCookies || []).map(c => c.split(";")[0]).join("; ");
  console.log("Logged in, token:", token);
}

async function uploadFile(dir, filename, buf) {
  const boundary = "----Boundary" + Date.now();
  const parts = [
    Buffer.from("--" + boundary + "\r\nContent-Disposition: form-data; name=\"dir\"\r\n\r\n" + dir + "\r\n", "utf8"),
    Buffer.from("--" + boundary + "\r\nContent-Disposition: form-data; name=\"overwrite\"\r\n\r\n1\r\n", "utf8"),
    Buffer.from("--" + boundary + "\r\nContent-Disposition: form-data; name=\"file-1\"; filename=\"" + filename + "\"\r\nContent-Type: text/plain\r\n\r\n", "utf8"),
    buf,
    Buffer.from("\r\n--" + boundary + "--\r\n", "utf8"),
  ];
  const body = Buffer.concat(parts);
  const r = await cpanelRequest({ hostname: "156.232.88.10", port: 2083, path: token + "/execute/Fileman/upload_files", method: "POST", headers: { Cookie: cookie, "Content-Type": "multipart/form-data; boundary=" + boundary, "Content-Length": body.length }, rejectUnauthorized: false }, body);
  try {
    const j = JSON.parse(r.body);
    if (j.status === 1) console.log("SUCCESS:", filename);
    else console.log(filename + " WARN:", r.body.slice(0, 200));
  } catch(e) { console.log(filename + ":", r.statusCode, r.body.slice(0, 200)); }
}

async function main() {
  await login();
  const apiDir = "/home/ooezylpj/public_html/studyplug-api";
  const filesToDeploy = [
    "setup_classification_schema.php",
    "classify_questions.php",
    "get_topic_questions.php",
    "setup_structured_lessons.php",
    "get_structured_lesson.php",
    "save_structured_lesson.php",
    "manage_notes.php",
    "setup_coverage_schema.php",
    "validate_coverage.php",
    "import_syllabus_manifest.php",
    "update_subtopic_coverage.php",
    "get_overall_coverage.php",
    "get_questions.php",
    "get_subtopic_exam_matrix.php",
    "populate_gce_questions.php",
    "populate_nabteb_questions.php"
  ];
  for (const f of filesToDeploy) {
    if (fs.existsSync("studyplug-api/" + f)) {
      await uploadFile(apiDir, f, fs.readFileSync("studyplug-api/" + f));
    }
  }
  console.log("All API classification files deployed.");
}

main().catch(console.error);
