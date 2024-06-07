const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/file.txt', 'utf8');
const second = readFileSync('./content/file2.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: \n${first}, ${second}`);

const { readFile, writeFile } = require('fs');

readFile('./content/file.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Async time: ${result}`);
  readFile('./content/file2.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Async time: ${result}`);
  })
});

writeFile('./content/result-async.txt', 'Hello Async File', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
});