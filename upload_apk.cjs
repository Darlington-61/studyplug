const https = require('https');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

function cpanelRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      const setCookies = res.headers['set-cookie'];
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body, setCookies }));
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function main() {
  const apkPath = path.join(__dirname, 'StudyPlug.apk');
  if (!fs.existsSync(apkPath)) {
    console.error('StudyPlug.apk not found!');
    return;
  }
  const fileContent = fs.readFileSync(apkPath);
  console.log(`Uploading StudyPlug.apk (${fileContent.length} bytes)...`);

  const postData = querystring.stringify({ user: 'ooezylpj', pass: 'M23risM3r+6YQ*' });
  const loginRes = await cpanelRequest(
    {
      hostname: '156.232.88.10',
      port: 2083,
      path: '/login/?login_only=1',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData),
      },
      rejectUnauthorized: false,
    },
    postData
  );

  const loginJson = JSON.parse(loginRes.body);
  const cpanelToken = loginJson.security_token;
  const cpanelCookie = (loginRes.setCookies || []).map((c) => c.split(';')[0]).join('; ');
  console.log('cPanel logged in, token:', cpanelToken);

  const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
  const header =
    `--${boundary}\r\n` +
    `Content-Disposition: form-data; name="dir"\r\n\r\n` +
    `/home/ooezylpj/studyplug.com.ng\r\n` +
    `--${boundary}\r\n` +
    `Content-Disposition: form-data; name="overwrite"\r\n\r\n` +
    `1\r\n` +
    `--${boundary}\r\n` +
    `Content-Disposition: form-data; name="file-1"; filename="StudyPlug.apk"\r\n` +
    `Content-Type: application/vnd.android.package-archive\r\n\r\n`;

  const footer = `\r\n--${boundary}--\r\n`;
  const multipartBody = Buffer.concat([
    Buffer.from(header, 'utf8'),
    fileContent,
    Buffer.from(footer, 'utf8'),
  ]);

  const uploadRes = await cpanelRequest(
    {
      hostname: '156.232.88.10',
      port: 2083,
      path: cpanelToken + '/execute/Fileman/upload_files',
      method: 'POST',
      headers: {
        Cookie: cpanelCookie,
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': multipartBody.length,
      },
      rejectUnauthorized: false,
    },
    multipartBody
  );

  console.log('Upload response status:', uploadRes.statusCode);
  const json = JSON.parse(uploadRes.body);
  if (json.status === 1) {
    console.log('SUCCESS: StudyPlug.apk uploaded to studyplug.com.ng!');
  } else {
    console.error('Upload warning/error:', json.errors || json.status);
  }
}

main().catch(console.error);
