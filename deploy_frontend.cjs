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

let cpanelToken = '';
let cpanelCookie = '';

async function loginCpanel() {
  console.log('Logging into cPanel...');
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
  if (!loginJson.security_token) {
    throw new Error('Failed to obtain cPanel security token: ' + loginRes.body);
  }
  cpanelToken = loginJson.security_token;
  cpanelCookie = (loginRes.setCookies || []).map((c) => c.split(';')[0]).join('; ');
  console.log('cPanel logged in successfully, token:', cpanelToken);
}

async function uploadFile(targetDir, filename, contentBuffer) {
  console.log(`Uploading ${filename} to ${targetDir} (${contentBuffer.length} bytes)...`);
  const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);

  const header =
    `--${boundary}\r\n` +
    `Content-Disposition: form-data; name="dir"\r\n\r\n` +
    `${targetDir}\r\n` +
    `--${boundary}\r\n` +
    `Content-Disposition: form-data; name="overwrite"\r\n\r\n` +
    `1\r\n` +
    `--${boundary}\r\n` +
    `Content-Disposition: form-data; name="file-1"; filename="${filename}"\r\n` +
    `Content-Type: text/html\r\n\r\n`;

  const footer = `\r\n--${boundary}--\r\n`;

  const totalLength = Buffer.byteLength(header) + contentBuffer.length + Buffer.byteLength(footer);
  const multipartBody = Buffer.concat([
    Buffer.from(header, 'utf8'),
    contentBuffer,
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
    console.log(`SUCCESS: ${filename} uploaded successfully to ${targetDir}!`);
  } else {
    console.error('Upload warning/error:', json.errors || json.status);
  }
}

async function main() {
  const indexHtmlPath = path.join(__dirname, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error('index.html not found! Run build-standalone first.');
  }
  const fileContent = fs.readFileSync(indexHtmlPath);

  await loginCpanel();
  await uploadFile('/home/ooezylpj/studyplug.com.ng', 'index.html', fileContent);

  // Upload iOS Icons and PWA Web Manifest
  const iconFiles = ['manifest.json', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'];
  for (const f of iconFiles) {
    const fPath = path.join(__dirname, f);
    if (fs.existsSync(fPath)) {
      await uploadFile('/home/ooezylpj/studyplug.com.ng', f, fs.readFileSync(fPath));
    }
  }

  const htaccessContent = Buffer.from(
    `<IfModule mod_headers.c>
  <FilesMatch "\\.(html|htm)$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires 0
  </FilesMatch>
</IfModule>
`,
    'utf8'
  );
  await uploadFile('/home/ooezylpj/studyplug.com.ng', '.htaccess', htaccessContent);
}

main().catch(console.error);
