const readline = require('readline');
const operations = require('./operations.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
Calc.js
Created by: Miftakhus Salam
`);

rl.question(`
  Choose operator:
  [1] summation (+)
  [2] subtraction (-)
  [3] multiplication (*)
  [4] distribution (/)
  [5] square root
  [6] square area
  [7] cube volume
  [8] tube volume
  You are choose : `, (choice) => {
  switch (choice) {
    case '1':
      rl.question('input first number: ', (x) => {
        rl.question('input second number: ', (y) => {
          if (!operations.validateNumbers(x, y)) {
            console.log('invalid number !!!')
          } else {
            console.log(`${x} + ${y} = ${operations.add(x, y)}`);
          }
          rl.close();
        });
      });
      break;
    case '2':
      rl.question('input first number: ', (x) => {
        rl.question('input second number: ', (y) => {
          if (!operations.validateNumbers(x, y)) {
            console.log('invalid number !!!')
          } else {
            console.log(`${x} - ${y} = ${operations.subtract(x, y)}`);
          }
          rl.close();
        });
      });
      break;
    case '3':
      rl.question('input first number: ', (x) => {
        rl.question('input second number: ', (y) => {
          if (!operations.validateNumbers(x, y)) {
            console.log('invalid number !!!')
          } else {
            console.log(`${x} * ${y} = ${operations.multiply(x, y)}`);
          }
          rl.close();
        });
      });
      break;
    case '4':
      rl.question('input first number: ', (x) => {
        rl.question('input second number: ', (y) => {
          if (!operations.validateNumbers(x, y)) {
            console.log('invalid number !!!')
          } else {
            console.log(`${x} / ${y} = ${operations.divide(x, y)}`);
          }
          rl.close();
        });
      });
      break;
    case '5':
      rl.question('input number: ', (x) => {
        if (!operations.validateSingleNumber(x)) {
          console.log('invalid number !!!')
        } else {
          console.log(`square root from ${x} is ${operations.squareRoot(x)}`);
        }
        rl.close();
      });
      break;
    case '6':
      rl.question('input number: ', (x) => {
        if (!operations.validateSingleNumber(x)) {
          console.log('invalid number !!!')
        } else {
          console.log(`square area from ${x} is ${operations.squareArea(x)}.`);
        }
        rl.close();
      });
      break;
    case '7':
      rl.question('input number: ', (x) => {
        if (!operations.validateSingleNumber(x)) {
          console.log('invalid number !!!')
        } else {
          console.log(`cube volume from ${x} is ${operations.cubeVolume(x)}`);
        }
        rl.close();
      });
      break;
    case '8':
      rl.question('input r: ', (x) => {
        rl.question('input t: ', (y) => {
          if (!operations.validateNumbers(x, y)) {
            console.log('invalid number !!!')
          } else {
            console.log(`Tube Volume = ${operations.tubeVolume(x, y)}`);
          }
          rl.close();
        });
      });
      break;
    default:
      console.log(`${choice} is not available`);
      break;
  }
});
