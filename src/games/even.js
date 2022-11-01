import run from '../index.js';
import { getRandomNum } from '../helpers.js';

const firstQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const questionAnswer = () => {
  const randomNumber = getRandomNum(minNum, maxNum);
  const expression = String(randomNumber);
  const isEven = () => expression % 2 === 0;
  const correctAnswer = isEven() ? 'yes' : 'no';

  return [expression, correctAnswer];
};

export default () => {
  run(firstQuestion, questionAnswer);
};
