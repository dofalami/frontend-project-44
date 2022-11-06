import run from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 100;

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const question = `${number1} ${number2}`;

  let correctAnswer = '';

  if (number1 === 0) correctAnswer = number2;

  let a = number1;
  let b = number2;

  while (b !== 0) {
    if (a > b) a -= b;
    else b -= a;
  }
  correctAnswer = String(a);

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
