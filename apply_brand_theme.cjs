const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.cjs')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
files.push('build-standalone.cjs');

let modifiedFiles = 0;
files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace primary purple with StudyPlug Chalkboard Forest Green
  content = content.replace(/#5B41DF/gi, '#0E382B');
  content = content.replace(/#6C4FF7/gi, '#0E382B');
  content = content.replace(/#4E33D0/gi, '#0A2E23');
  content = content.replace(/#4A32F6/gi, '#0A2E23');
  content = content.replace(/#5A42F5/gi, '#0E382B');
  content = content.replace(/shadow-purple-glow/g, 'shadow-brand-glow');
  content = content.replace(/selection:bg-brand-500/g, 'selection:bg-[#0E382B] selection:text-[#FFCC00]');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
    modifiedFiles++;
  }
});

console.log(`Successfully updated ${modifiedFiles} files to StudyPlug brand colors!`);
