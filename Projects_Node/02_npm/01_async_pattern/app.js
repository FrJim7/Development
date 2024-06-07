const http = require('http');
const {readFile} = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
};

const start = async () => {
  try {
    const first = await getText('../../01_built-in_modules/content/file.txt');
    const second = await getText('../../01_built-in_modules/content/file2.txt');
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
}

start();