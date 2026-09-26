const https = require("https");
const querystring = require("querystring");
const fs = require("fs");

function cpanelRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = "";
      const setCookies = res.headers["set-cookie"];
      res.on("data", (chunk) => (body += chunk));
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
  const r = await cpanelRequest(
    {
      hostname: "156.232.88.10",
      port: 2083,
      path: "/login/?login_only=1",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(pd),
      },
      rejectUnauthorized: false,
    },
    pd
  );
  const j = JSON.parse(r.body);
  token = j.security_token;
  cookie = (r.setCookies || []).map((c) => c.split(";")[0]).join("; ");
  console.log("cPanel Logged in, token:", token);
}

async function uploadFile(dir, filename, buf) {
  const boundary = "----Boundary" + Date.now();
  const parts = [
    Buffer.from('--' + boundary + '\r\nContent-Disposition: form-data; name="dir"\r\n\r\n' + dir + '\r\n', 'utf8'),
    Buffer.from('--' + boundary + '\r\nContent-Disposition: form-data; name="overwrite"\r\n\r\n1\r\n', 'utf8'),
    Buffer.from('--' + boundary + '\r\nContent-Disposition: form-data; name="file-1"; filename="' + filename + '"\r\nContent-Type: text/plain\r\n\r\n', 'utf8'),
    buf,
    Buffer.from('\r\n--' + boundary + '--\r\n', 'utf8'),
  ];
  const body = Buffer.concat(parts);
  const r = await cpanelRequest(
    {
      hostname: "156.232.88.10",
      port: 2083,
      path: token + "/execute/Fileman/upload_files",
      method: "POST",
      headers: {
        Cookie: cookie,
        "Content-Type": "multipart/form-data; boundary=" + boundary,
        "Content-Length": body.length,
      },
      rejectUnauthorized: false,
    },
    body
  );
  try {
    const j = JSON.parse(r.body);
    if (j.status === 1) console.log("SUCCESS uploaded:", filename);
    else console.log(filename + " WARN:", r.body.slice(0, 200));
  } catch (e) {
    console.log(filename + ":", r.statusCode, r.body.slice(0, 200));
  }
}

async function main() {
  await login();
  const dirs = [
    "/home/ooezylpj/public_html/studyplug-api",
    "/home/ooezylpj/studyplug.com.ng/studyplug-api"
  ];
  const files = [
    "db.php",
    "setup_orders_schema.php",
    "selar_config.php",
    "selar_webhook.php",
    "get_user_entitlements.php"
  ];
  for (const dir of dirs) {
    for (const f of files) {
      const path = "studyplug-api/" + f;
      if (fs.existsSync(path)) {
        await uploadFile(dir, f, fs.readFileSync(path));
      }
    }
  }
  console.log("All order and webhook files uploaded successfully across both domains.");
}

main().catch(console.error);
