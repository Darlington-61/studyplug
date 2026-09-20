const https = require('https');
const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const acme = require('acme-client');

function cpanelRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      const setCookies = res.headers['set-cookie'];
      res.on('data', chunk => body += chunk);
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
  const postData = querystring.stringify({ user: 'ooezylpj', pass: 'M23risM3r+6YQ*' });
  const loginRes = await cpanelRequest({
    hostname: '156.232.88.10',
    port: 2083,
    path: '/login/?login_only=1',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    },
    rejectUnauthorized: false
  }, postData);

  const loginJson = JSON.parse(loginRes.body);
  cpanelToken = loginJson.security_token;
  cpanelCookie = (loginRes.setCookies || []).map(c => c.split(';')[0]).join('; ');
  console.log('cPanel logged in successfully, token:', cpanelToken);
}

async function uploadChallenge(token, keyAuthorization) {
  console.log(`Uploading challenge token: ${token}`);
  const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
  let payload = '';
  payload += `--${boundary}\r\n`;
  payload += `Content-Disposition: form-data; name="dir"\r\n\r\n`;
  payload += `/home/ooezylpj/studyplug.com.ng/.well-known/acme-challenge\r\n`;
  payload += `--${boundary}\r\n`;
  payload += `Content-Disposition: form-data; name="overwrite"\r\n\r\n`;
  payload += `1\r\n`;
  payload += `--${boundary}\r\n`;
  payload += `Content-Disposition: form-data; name="file-1"; filename="${token}"\r\n`;
  payload += `Content-Type: text/plain\r\n\r\n`;
  payload += `${keyAuthorization}\r\n`;
  payload += `--${boundary}--\r\n`;

  const uploadRes = await cpanelRequest({
    hostname: '156.232.88.10',
    port: 2083,
    path: cpanelToken + '/execute/Fileman/upload_files',
    method: 'POST',
    headers: {
      'Cookie': cpanelCookie,
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      'Content-Length': Buffer.byteLength(payload)
    },
    rejectUnauthorized: false
  }, payload);

  console.log(`Uploaded challenge response:`, uploadRes.body);
}

async function issueAndInstallSSL() {
  await loginCpanel();

  console.log('Initializing ACME client with Let\'s Encrypt Production directory...');
  const client = new acme.Client({
    directoryUrl: acme.directory.letsencrypt.production,
    accountKey: await acme.crypto.createPrivateKey()
  });

  console.log('Creating CSR and private key...');
  const [key, csr] = await acme.crypto.createCsr({
    commonName: 'studyplug.com.ng',
    altNames: ['studyplug.com.ng', 'www.studyplug.com.ng']
  });

  console.log('Requesting certificate from Let\'s Encrypt...');
  const cert = await client.auto({
    csr,
    email: 'goldtechnigeria@gmail.com',
    termsOfServiceAgreed: true,
    challengeCreateFn: async (authz, challenge, keyAuthorization) => {
      console.log(`[Challenge Create] Domain: ${authz.identifier.value}, Type: ${challenge.type}`);
      if (challenge.type === 'http-01') {
        await uploadChallenge(challenge.token, keyAuthorization);
        // Wait a few seconds for propagation
        await new Promise(r => setTimeout(r, 4000));
      }
    },
    challengeRemoveFn: async (authz, challenge) => {
      console.log(`[Challenge Clean] Domain: ${authz.identifier.value}`);
    }
  });

  console.log('Successfully received certificate from Let\'s Encrypt!');
  fs.writeFileSync('studyplug_cert.crt', cert, 'utf8');
  fs.writeFileSync('studyplug_key.key', key, 'utf8');

  // Parse cert to extract domain and bundle
  console.log('Installing SSL certificate on cPanel...');
  const installData = querystring.stringify({
    domain: 'studyplug.com.ng',
    cert: cert.toString(),
    key: key.toString()
  });

  const installRes = await cpanelRequest({
    hostname: '156.232.88.10',
    port: 2083,
    path: cpanelToken + '/execute/SSL/install_ssl',
    method: 'POST',
    headers: {
      'Cookie': cpanelCookie,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(installData)
    },
    rejectUnauthorized: false
  }, installData);

  console.log('cPanel install_ssl result:', installRes.body);
}

issueAndInstallSSL().catch(err => {
  console.error('Fatal error during SSL issuance:', err);
});
