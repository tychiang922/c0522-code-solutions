const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const number1 = Number(process.argv[2]);
const number2 = Number(process.argv[4]);
let result = null;
switch (process.argv[3]) {
  case 'plus':
    result = add(number1, number2);
    break;
  case 'minus':
    result = subtract(number1, number2);
    break;
  case 'time':
    result = multiply(number1, number2);
    break;
  case 'over':
    result = divide(number1, number2);
    break;
  default:
    console.log('invalid operation');
}
if (result !== null) {
  console.log(`result: ${result}`);
}
