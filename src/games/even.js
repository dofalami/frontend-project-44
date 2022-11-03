import run from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const generateRound = () => {
  const randomNumber = getRandomNumber(minNum, maxNum);
  const question = String(randomNumber);
  const isEven = () => question % 2 === 0;
  const correctAnswer = isEven() ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
