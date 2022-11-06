import run from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 100;

const gcd = (number1, number2) => {
  return number2 ? gcd(number2, number1 % number2) : number1;
};

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
