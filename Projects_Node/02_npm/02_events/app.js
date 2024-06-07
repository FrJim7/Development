const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

myEventEmitter.on('response',(name, id) => {
  console.log(`data recieve: ${name} with id ${id} `);
})

myEventEmitter.emit('response', 'jhon', 34);

myEventEmitter.on('response', () => {
  console.log('this doesnt work');
})