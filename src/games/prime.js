import run from '../index.js';
import { getRandomNum } from '../helpers.js';

const firstQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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

const GetQuestionAnswer = () => {
  const randomNumber = getRandomNum(minNum, maxNum);
  const expression = String(randomNumber);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [expression, correctAnswer];
};

export default () => {
  run(firstQuestion, GetQuestionAnswer);
};
