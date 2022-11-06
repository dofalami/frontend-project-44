import run from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 100;

const generateRound = () => {
  const randomNumber1 = getRandomNumber(minRange, maxRange);
  const randomNumber2 = getRandomNumber(minRange, maxRange);
  const question = `${randomNumber1} ${randomNumber2}`;

  let correctAnswer = '';

  if (randomNumber1 === 0) correctAnswer = randomNumber2;

  let a = randomNumber1;
  let b = randomNumber2;

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
