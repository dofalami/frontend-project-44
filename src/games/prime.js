import run from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(minNum, maxNum);
  const question = String(randomNumber);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
