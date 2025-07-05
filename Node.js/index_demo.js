console.log("Hello from Node.js...");

// const person = require('./person');
// console.log(person.name);

const Person = require('./person');
const newPerson = new Person('Mai Tran', 20);
newPerson.greeting();

const Logger = require('./logger');
const logger = new Logger();
logger.on('message', (data) => console.log('Listener called', data));

logger.log('Hello world');
logger.log('Hi');