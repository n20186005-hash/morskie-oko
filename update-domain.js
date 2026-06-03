const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/https:\/\/tomislavsquare\.com/g, 'https://brokenchairgeneva.com');
  content = content.replace(/https:\/\/broken-chair-geneva\.com/g, 'https://brokenchairgeneva.com');
  fs.writeFileSync(filePath, content);
}

const filesToUpdate = [
  'src/app/robots.ts',
  'src/app/sitemap.ts',
  'src/app/[locale]/layout.tsx',
  'src/app/[locale]/page.tsx',
  'src/app/[locale]/cookie-settings/page.tsx',
  'src/app/[locale]/privacy-policy/page.tsx',
  'src/app/[locale]/terms-of-service/page.tsx'
];

filesToUpdate.forEach(f => {
  const fullPath = path.join(__dirname, f);
  if (fs.existsSync(fullPath)) {
    replaceInFile(fullPath);
    console.log('Updated ' + f);
  } else {
    console.log('File not found: ' + f);
  }
});
