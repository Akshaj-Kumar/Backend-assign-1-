

const isEven = require('./modules/isEven');
const log = require('./modules/logger');

log('Starting app.js execution...');

const numbers = [4, 7, 10, 15, 22];

numbers.forEach((num) => {
  if (isEven(num)) {
    log(`${num} is Even`);
  } else {
    log(`${num} is Odd`);
  }
});

log('Finished app.js execution.');
