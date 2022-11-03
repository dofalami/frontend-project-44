import run from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNum = 1;
const maxNum = 100;

const genearateRound = () => {
  const randomNumber1 = getRandomNumber(minNum, maxNum);
  const randomNumber2 = getRandomNumber(minNum, maxNum);
  const expression = `${randomNumber1} ${randomNumber2}`;

  let correctAnswer = '';

  if (randomNumber1 === 0) correctAnswer = randomNumber2;

  let a = randomNumber1;
  let b = randomNumber2;

  while (b !== 0) {
    if (a > b) a -= b;
    else b -= a;
  }
  correctAnswer = String(a);

  return [expression, correctAnswer];
};

export default () => {
  run(description, genearateRound);
};
