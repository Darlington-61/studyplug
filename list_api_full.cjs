const https = require("https");
const querystring = require("querystring");

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
  
  // Search for ping.php to find actual API path
  for (const dir of [
    "/home/ooezylpj/eznonews.com.ng/studyplug-api",
    "/home/ooezylpj/public_html/studyplug-api",
    "/home/ooezylpj/eznonews.com.ng/public_html/studyplug-api",
  ]) {
    const lsPath = token + "/execute/Fileman/list_files?dir=" + encodeURIComponent(dir);
    const lsr = await cpanelRequest({ hostname: "156.232.88.10", port: 2083, path: lsPath, method: "GET", headers: { Cookie: cookie }, rejectUnauthorized: false });
    try {
      const ls = JSON.parse(lsr.body);
      if (ls.data && ls.data.length > 0) {
        const files = ls.data.map(f => f.file || f.name || "?").join(", ");
        console.log(dir + ":", files.slice(0, 300));
      } else {
        console.log(dir + ": empty or not found. Status:", lsr.statusCode, ls.errors);
      }
    } catch(e) {
      console.log(dir + ": parse error -", lsr.body.slice(0, 80));
    }
  }
}

main().catch(e => console.error("Error:", e.message));
