const path = require('path');

// Separator type from Os
console.log(path.sep);

// Joining path
const filePath = path.join('content', 'subfolder', 'text.txt');
console.log(filePath);

// Directory summary
const basePath = path.basename(filePath);
console.log(basePath);

// Absolute pathing
const absolutePath = path.resolve(__dirname,'content', 'subfolder', 'text.txt');
console.log(absolutePath);