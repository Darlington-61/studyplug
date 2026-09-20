const fs = require('fs');
const { PNG } = require('pngjs');

function createChalkboardIcon(size, filename) {
  const png = new PNG({ width: size, height: size });

  // Background: #061710 (dark slate chalkboard)
  // Border: #C4823F (hardwood gold)
  // Cap & Accent: #FFCC00 (chalk yellow) & #34D399 (emerald)

  const borderThickness = Math.max(2, Math.floor(size * 0.04));
  const cornerRadius = Math.floor(size * 0.22); // iOS squircle radius

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (size * y + x) << 2;

      const isBorder =
        x < borderThickness ||
        x >= size - borderThickness ||
        y < borderThickness ||
        y >= size - borderThickness;

      if (isBorder) {
        png.data[idx] = 196;     // R (#C4823F)
        png.data[idx + 1] = 130; // G
        png.data[idx + 2] = 63;  // B
        png.data[idx + 3] = 255; // A
      } else {
        // Base dark green: #061710
        png.data[idx] = 6;
        png.data[idx + 1] = 23;
        png.data[idx + 2] = 16;
        png.data[idx + 3] = 255;
      }

      // Draw Graduation Cap Diamond Shape in center:
      // Center (cx, cy)
      const cx = size / 2;
      const cy = size * 0.42;
      const rx = size * 0.32;
      const ry = size * 0.16;

      const dx = Math.abs(x - cx) / rx;
      const dy = Math.abs(y - cy) / ry;

      if (dx + dy <= 1.0) {
        // Cap top in Gold #FFCC00
        png.data[idx] = 255;
        png.data[idx + 1] = 204;
        png.data[idx + 2] = 0;
        png.data[idx + 3] = 255;
      }

      // Cap Lower Skullcap:
      const capLowerY = size * 0.45;
      const capBottomY = size * 0.58;
      const capWidth = size * 0.18;
      if (y >= capLowerY && y <= capBottomY && Math.abs(x - cx) <= capWidth) {
        png.data[idx] = 230;
        png.data[idx + 1] = 180;
        png.data[idx + 2] = 0;
        png.data[idx + 3] = 255;
      }

      // Electric Plug Prongs / Base in Emerald #34D399:
      const prongTopY = size * 0.62;
      const prongBottomY = size * 0.76;
      const prongW = size * 0.05;
      const prongOffset = size * 0.1;

      const inProng1 = Math.abs(x - (cx - prongOffset)) <= prongW && y >= prongTopY && y <= prongBottomY;
      const inProng2 = Math.abs(x - (cx + prongOffset)) <= prongW && y >= prongTopY && y <= prongBottomY;

      if (inProng1 || inProng2) {
        png.data[idx] = 52;      // #34D399
        png.data[idx + 1] = 211;
        png.data[idx + 2] = 153;
        png.data[idx + 3] = 255;
      }
    }
  }

  const buffer = PNG.sync.write(png);
  fs.writeFileSync(filename, buffer);
  console.log(`Generated ${filename} (${size}x${size})`);
}

createChalkboardIcon(180, 'apple-touch-icon.png');
createChalkboardIcon(192, 'icon-192.png');
createChalkboardIcon(512, 'icon-512.png');
