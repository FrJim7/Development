const os = require('os');

// current user info
const user = os.userInfo();
console.log(user);

// system uptime in seconds
console.log(`System uptime: ${os.uptime()} seconds`);

// other useful information
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}

console.log(currentOS);