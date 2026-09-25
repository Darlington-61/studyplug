const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const js = fs.readFileSync('standalone.js', 'utf8');
const katexCss = fs.existsSync('node_modules/katex/dist/katex.min.css')
  ? fs.readFileSync('node_modules/katex/dist/katex.min.css', 'utf8')
  : '';

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
    <meta name="theme-color" content="#004D40" />
    <!-- Inter Font from Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- KaTeX Mathematical Typography -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.18.7/dist/katex.min.css" crossorigin="anonymous">
    <style>
${katexCss}
${css}

/* High-Contrast Typography & Bold Weights */
strong, b, .font-bold, .font-extrabold, .font-black {
  font-weight: 700;
}

/* Classroom HTML Content Styling for High-Fidelity Textbook Notes */
.classroom-html-content {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #10201D;
  line-height: 1.8;
  font-size: 0.95rem;
}

.classroom-html-content h1 {
  color: #102A2A;
  font-size: 1.5rem;
  font-weight: 800;
  margin-top: 2rem;
  margin-bottom: 0.85rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #DDE7E3;
  line-height: 1.3;
  text-align: left;
}

.classroom-html-content h2 {
  color: #102A2A;
  font-size: 1.25rem;
  font-weight: 800;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
  padding-left: 0.75rem;
  border-left: 4px solid #004D40;
  line-height: 1.35;
  text-align: left;
}

.classroom-html-content h3 {
  color: #1E293B;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

.classroom-html-content p {
  margin-top: 0.85rem;
  margin-bottom: 0.85rem;
  line-height: 1.8;
  color: #1E293B;
  text-align: left;
}

.classroom-html-content strong,
.classroom-html-content b {
  color: #0F172A;
  font-weight: 700;
}

/* Custom Styled Callout Badges */
.note-badge-example {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.85rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #FEF3C7;
  color: #92400E;
  border: 1px solid #FDE68A;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}

.note-badge-solution {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.85rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #D1FAE5;
  color: #065F46;
  border: 1px solid #A7F3D0;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
}

.note-badge-concept {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #E0F2FE;
  color: #0369A1;
  border: 1px solid #BAE6FD;
  margin-top: 1rem;
  margin-bottom: 0.4rem;
}

.note-badge-objectives {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.85rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #EDE9FE;
  color: #6D28D9;
  border: 1px solid #DDD6FE;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

/* KaTeX Math Elements */
.katex {
  font-size: 1.08em;
  text-rendering: auto;
}
.katex-rendered {
  color: #0F172A;
}
.katex-display-block {
  display: block;
  text-align: center;
  margin: 1.25rem auto;
  padding: 0.85rem 1.25rem;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 0.85rem;
  overflow-x: auto;
  color: #0F172A;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
}
.katex-inline {
  display: inline-block;
  padding: 0 0.25rem;
  color: #1D4ED8;
  vertical-align: -0.1em;
}

/* Lists styling */
.classroom-html-content ul {
  list-style: none;
  padding-left: 0;
  margin: 0.85rem 0;
}
.classroom-html-content ul > li {
  position: relative;
  padding-left: 1.5rem;
  margin-top: 0.45rem;
  margin-bottom: 0.45rem;
  line-height: 1.7;
  color: #1E293B;
}
.classroom-html-content ul > li::before {
  content: "•";
  position: absolute;
  left: 0.35rem;
  top: -0.1rem;
  color: #2563EB;
  font-size: 1.25rem;
  font-weight: bold;
}

.classroom-html-content ol {
  padding-left: 1.5rem;
  margin: 0.85rem 0;
}
.classroom-html-content ol > li {
  margin-top: 0.45rem;
  margin-bottom: 0.45rem;
  line-height: 1.7;
  color: #1E293B;
}
.classroom-html-content ol > li::marker {
  color: #2563EB;
  font-weight: 800;
}

/* Images */
.classroom-html-content img {
  max-width: 100%;
  max-height: 380px;
  object-fit: contain;
  border-radius: 1rem;
  margin: 1.5rem auto;
  display: block;
  border: 1px solid #E2E8F0;
  background: #FFFFFF;
  padding: 0.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

/* Tables */
.classroom-html-content table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 1.5rem 0;
  border-radius: 0.75rem;
  overflow: hidden;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
.classroom-html-content th {
  background: #F1F5F9;
  color: #0F172A;
  font-weight: 700;
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 2px solid #CBD5E1;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.classroom-html-content td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #E2E8F0;
  color: #1E293B;
  font-size: 0.88rem;
}
.classroom-html-content tr:last-child td {
  border-bottom: none;
}
.classroom-html-content td:first-child {
  color: #0F172A;
  font-weight: 600;
}
.classroom-html-content tr:nth-child(even) td {
  background: #F8FAFC;
}
.classroom-html-content blockquote {
  border-left: 4px solid #2563EB;
  background: #EFF6FF;
  padding: 0.75rem 1rem;
  margin: 1rem 0;
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: #1E293B;
}
    </style>
  </head>
  <body style="background-color:#F7F9F8;color:#10201D;" class="font-sans antialiased">
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
