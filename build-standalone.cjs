const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const js = fs.readFileSync('standalone.js', 'utf8');

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%235A42F5'><path d='M12 3L1 9l11 6 9-4.91V17h2V9L12 3z'/></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <title>Study Plug - Test. Practice. Succeed.</title>
    <!-- iOS iPhone PWA App Meta Tags -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="StudyPlug" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#061710" />
    <!-- Plus Jakarta Sans Font from Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
${css}

/* High-Contrast Typography & Bold Weights */
strong, b, .font-bold, .font-extrabold, .font-black {
  font-weight: 800;
}
    </style>
  </head>
  <body style="background-color:#061710;color:#ffffff;" class="font-sans antialiased selection:bg-[#FFCC00] selection:text-[#071F15]">
    <div id="root"></div>
    <script>
${js}
    </script>
  </body>
</html>`;

fs.writeFileSync('index.html', html, 'utf8');
if (!fs.existsSync('dist')) fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html, 'utf8');
console.log('Successfully generated standalone index.html (' + fs.statSync('index.html').size + ' bytes)');
