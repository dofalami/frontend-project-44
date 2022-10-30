import run from '../index.js';
import { getRandom } from '../randomNum.js';

const firstQuestion = 'Find the greatest common divisor of given numbers.';
const minNum = 1;
const maxNum = 100;

const questionAnswer = () => {
  const randomNumber1 = getRandom(minNum, maxNum);
  const randomNumber2 = getRandom(minNum, maxNum);
  const expression = String(randomNumber1) + ' ' + String(randomNumber2);

  let correctAnswer = '';

  if (randomNumber1 === 0) correctAnswer = randomNumber2;

  let a = randomNumber1;
  let b = randomNumber2;

  while (b !== 0) {
    if (a > b) {
      a -= b;
    }
    else {
      b -= a;
    }
  }
  correctAnswer = a;

  return [expression, correctAnswer];
};

export default () => {
  run(firstQuestion, questionAnswer);
};
