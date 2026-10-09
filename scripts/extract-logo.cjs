const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const inputPath = 'C:\\Users\\WORK SPACE\\.gemini\\antigravity\\brain\\344c1ee8-440e-4c0f-9e9a-a347f183ae45\\.user_uploaded\\media_1791065586139.png';
const buf = fs.readFileSync(inputPath);
const src = PNG.sync.read(buf);

fs.mkdirSync('public', { recursive: true });
fs.mkdirSync('src/assets', { recursive: true });

// Copy exact original file to public and src/assets
fs.writeFileSync('public/studyplug-logo-original.png', buf);
fs.writeFileSync('src/assets/studyplug-logo-original.png', buf);

// Find exact bounding box of the logo
let minX = src.width, maxX = 0, minY = src.height, maxY = 0;
for (let y = 100; y < 360; y++) {
  for (let x = 50; x < 960; x++) {
    const idx = (src.width * y + x) << 2;
    const r = src.data[idx];
    const g = src.data[idx + 1];
    const b = src.data[idx + 2];
    const maxVal = Math.max(r, g, b);
    if (maxVal > 30) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

console.log('Detected Logo Box:', { minX, maxX, minY, maxY, w: maxX - minX, h: maxY - minY });

const pad = 6;
const cropX = Math.max(0, minX - pad);
const cropY = Math.max(0, minY - pad);
const cropW = Math.min(src.width - cropX, (maxX - minX) + pad * 2);
const cropH = Math.min(src.height - cropY, (maxY - minY) + pad * 2);

// 1. Transparent cropped logo for Dark Navy backgrounds (white "Study", yellow "Plug")
const cropped = new PNG({ width: cropW, height: cropH });
// 2. Transparent cropped logo for Light backgrounds (Navy "Study", yellow "Plug")
const croppedDark = new PNG({ width: cropW, height: cropH });

for (let y = 0; y < cropH; y++) {
  for (let x = 0; x < cropW; x++) {
    const srcIdx = (src.width * (cropY + y) + (cropX + x)) << 2;
    const dstIdx = (cropW * y + x) << 2;

    const r = src.data[srcIdx];
    const g = src.data[srcIdx + 1];
    const b = src.data[srcIdx + 2];
    const maxVal = Math.max(r, g, b);

    let alpha = 0;
    if (maxVal <= 18) {
      alpha = 0;
    } else if (maxVal < 65) {
      alpha = Math.round(((maxVal - 18) / (65 - 18)) * 255);
    } else {
      alpha = 255;
    }

    cropped.data[dstIdx] = r;
    cropped.data[dstIdx + 1] = g;
    cropped.data[dstIdx + 2] = b;
    cropped.data[dstIdx + 3] = alpha;

    // For dark text version on light backgrounds:
    // If pixel is predominantly white/grey (r ~ g ~ b and b > 100)
    // Map to Navy #001028: (0, 16, 40)
    if (alpha > 0) {
      const isYellow = (r > 150 && g > 120 && b < 80);
      if (isYellow) {
        croppedDark.data[dstIdx] = r;
        croppedDark.data[dstIdx + 1] = g;
        croppedDark.data[dstIdx + 2] = b;
        croppedDark.data[dstIdx + 3] = alpha;
      } else {
        // White/grey to Navy
        const lum = (r + g + b) / 3 / 255;
        croppedDark.data[dstIdx] = Math.round(0 * lum);
        croppedDark.data[dstIdx + 1] = Math.round(16 * lum);
        croppedDark.data[dstIdx + 2] = Math.round(40 * lum);
        croppedDark.data[dstIdx + 3] = alpha;
      }
    } else {
      croppedDark.data[dstIdx] = 0;
      croppedDark.data[dstIdx + 1] = 0;
      croppedDark.data[dstIdx + 2] = 0;
      croppedDark.data[dstIdx + 3] = 0;
    }
  }
}

const croppedBuf = PNG.sync.write(cropped);
fs.writeFileSync('public/studyplug-logo.png', croppedBuf);
fs.writeFileSync('src/assets/studyplug-logo.png', croppedBuf);

const croppedDarkBuf = PNG.sync.write(croppedDark);
fs.writeFileSync('public/studyplug-logo-dark.png', croppedDarkBuf);
fs.writeFileSync('src/assets/studyplug-logo-dark.png', croppedDarkBuf);

// 3. Icon-only transparent version (Mortarboard + P)
let iconMaxX = 0;
for (let y = 100; y < 350; y++) {
  for (let x = minX; x < 350; x++) {
    const idx = (src.width * y + x) << 2;
    const maxVal = Math.max(src.data[idx], src.data[idx + 1], src.data[idx + 2]);
    if (maxVal > 30 && x > iconMaxX) {
      iconMaxX = x;
    }
  }
}
const iconCropW = (iconMaxX - minX) + pad * 2;
const iconCropH = cropH;
const iconCropped = new PNG({ width: iconCropW, height: iconCropH });

for (let y = 0; y < iconCropH; y++) {
  for (let x = 0; x < iconCropW; x++) {
    const srcIdx = (src.width * (cropY + y) + (cropX + x)) << 2;
    const dstIdx = (iconCropW * y + x) << 2;

    const r = src.data[srcIdx];
    const g = src.data[srcIdx + 1];
    const b = src.data[srcIdx + 2];
    const maxVal = Math.max(r, g, b);

    let alpha = 0;
    if (maxVal <= 18) {
      alpha = 0;
    } else if (maxVal < 65) {
      alpha = Math.round(((maxVal - 18) / (65 - 18)) * 255);
    } else {
      alpha = 255;
    }

    iconCropped.data[dstIdx] = r;
    iconCropped.data[dstIdx + 1] = g;
    iconCropped.data[dstIdx + 2] = b;
    iconCropped.data[dstIdx + 3] = alpha;
  }
}
const iconBuf = PNG.sync.write(iconCropped);
fs.writeFileSync('public/studyplug-icon.png', iconBuf);
fs.writeFileSync('src/assets/studyplug-icon.png', iconBuf);

// 4. Write TypeScript export module with base64 data URIs
const b64Full = 'data:image/png;base64,' + buf.toString('base64');
const b64Transparent = 'data:image/png;base64,' + croppedBuf.toString('base64');
const b64Dark = 'data:image/png;base64,' + croppedDarkBuf.toString('base64');
const b64Icon = 'data:image/png;base64,' + iconBuf.toString('base64');

const tsCode = `// Official StudyPlug Logo Assets provided by user
export const STUDYPLUG_LOGO_ORIGINAL = '${b64Full}';

export const STUDYPLUG_LOGO_TRANSPARENT = '${b64Transparent}';

export const STUDYPLUG_LOGO_DARK = '${b64Dark}';

export const STUDYPLUG_ICON_TRANSPARENT = '${b64Icon}';

// Default export uses transparent cropped logo
export const STUDYPLUG_LOGO = STUDYPLUG_LOGO_TRANSPARENT;
`;

fs.writeFileSync('src/assets/studyPlugLogo.ts', tsCode, 'utf8');
console.log('Successfully generated and written all logo assets!');
