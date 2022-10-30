import run from '../index.js';
import { getRandom } from '../randomNum.js';

const firstQuestion = 'What is the result of the expression?';

const minNum = 1;
const maxNum = 10;

function randomOperator() {
  const opindex = Math.random() * 3 + 1;
  const result = Math.trunc(opindex);

  switch (result) {
    case 1:
      return '+';

    case 2:
      return '-';

    case 3:
      return '*';

    default:
      return false;
  }
}

const questionAnswer = () => {
  const number1 = getRandom(minNum, maxNum);
  const number2 = getRandom(minNum, maxNum);
  const operator = randomOperator();
  const expression = String(number1) + ' ' + String(operator) + ' ' + String(number2);
  const correctAnswer = calculate(number1, operator, number2);

  return [expression, correctAnswer];
};

export default () => {
  run(firstQuestion, questionAnswer);
};
