import run from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

const number = getRandomNumber(minRange, maxRange);
const isEven = () => number % 2 === 0;

const generateRound = () => {
  const question = String(number);
  const correctAnswer = isEven() ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
