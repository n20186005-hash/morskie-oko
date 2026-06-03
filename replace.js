const fs = require('fs');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/The Blue Eye/g, 'Broken Chair');
  content = content.replace(/Syri i Kaltër/g, '断椅');
  content = content.replace(/蓝眼泉/g, '断椅');
  fs.writeFileSync(filePath, content);
};

['src/messages/en.json', 'src/messages/zh.json', 'src/messages/de.json', 'src/messages/fr.json', 'src/messages/it.json', 'src/messages/rm.json'].forEach(replaceInFile);
