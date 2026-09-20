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

async function main() {
  const pd = querystring.stringify({ user: "ooezylpj", pass: "M23risM3r+6YQ*" });
  const lr = await cpanelRequest({ hostname: "156.232.88.10", port: 2083, path: "/login/?login_only=1", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "Content-Length": Buffer.byteLength(pd) }, rejectUnauthorized: false }, pd);
  const lj = JSON.parse(lr.body);
  const token = lj.security_token;
  const cookie = (lr.setCookies || []).map(c => c.split(";")[0]).join("; ");
  console.log("Token:", token);
  
  const lsPath = token + "/execute/Fileman/list_files?dir=%2Fhome%2Fooezylpj%2Feznonews.com.ng%2Fstudyplug-api";
  const lsr = await cpanelRequest({ hostname: "156.232.88.10", port: 2083, path: lsPath, method: "GET", headers: { Cookie: cookie }, rejectUnauthorized: false });
  console.log("List response status:", lsr.statusCode);
  try {
    const ls = JSON.parse(lsr.body);
    const files = (ls.data || []).map(f => f.file || f.fullpath || f.name || JSON.stringify(f));
    console.log("Files:", files.slice(0, 30).join("\n"));
  } catch(e) {
    console.log("Raw response:", lsr.body.slice(0, 500));
  }
}

main().catch(e => console.error("Error:", e.message));
