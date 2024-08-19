const fs = require('fs');
const path = require('path');

function readJsonFile(filePath) {
  const absolutePath = path.resolve(filePath);
  const fileContent = fs.readFileSync(absolutePath, 'utf8');
  return JSON.parse(fileContent);
}

module.exports = {
  readJsonFile,
};
