const https = require('https');
const querystring = require('querystring');
const fs = require('fs');

async function main() {
  const postData = querystring.stringify({ user: 'ooezylpj', pass: 'M23risM3r+6YQ*' });
  const loginRes = await new Promise((resolve, reject) => {
    const req = https.request({
      hostname: '156.232.88.10',
      port: 2083,
      path: '/login/?login_only=1',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      },
      rejectUnauthorized: false
    }, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => resolve({ body: b, cookies: res.headers['set-cookie'] }));
    });
    req.write(postData);
    req.end();
  });

  const parsed = JSON.parse(loginRes.body);
  const token = parsed.security_token;
  const cookie = loginRes.cookies.map(c => c.split(';')[0]).join('; ');

  const content = fs.readFileSync('studyplug-api/manage_notes.php');
  const boundary = '----Boundary' + Math.random().toString(36).substring(2);
  const header = `--${boundary}\r\nContent-Disposition: form-data; name="dir"\r\n\r\n/home/ooezylpj/public_html/studyplug-api\r\n--${boundary}\r\nContent-Disposition: form-data; name="overwrite"\r\n\r\n1\r\n--${boundary}\r\nContent-Disposition: form-data; name="file-0"; filename="manage_notes.php"\r\nContent-Type: application/x-php\r\n\r\n`;
  const footer = `\r\n--${boundary}--\r\n`;

  const payload = Buffer.concat([Buffer.from(header), content, Buffer.from(footer)]);

  const upRes = await new Promise((resolve, reject) => {
    const req = https.request({
      hostname: '156.232.88.10',
      port: 2083,
      path: `${token}/execute/Fileman/upload_files`,
      method: 'POST',
      headers: {
        'Cookie': cookie,
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': payload.length
      },
      rejectUnauthorized: false
    }, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => resolve({ status: res.statusCode, body: b }));
    });
    req.write(payload);
    req.end();
  });

  console.log('Upload status:', upRes.status);
}
main();
