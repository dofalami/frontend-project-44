import run from '../index.js';
import { getRandom } from '../randomNum.js';

const firstQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const questionAnswer = () => {
  const randomNumber = getRandom(minNum, maxNum);
  let expressionNum = String(randomNumber);
  const expression = expressionNum;
  let correctAnswer = '';
  
  if (expression % 2 === 0) {
    correctAnswer = 'yes';
  }

  if (expression % 2 === 1) {
    correctAnswer = 'no';
  }

  return [expression, correctAnswer]; 
}

export default () => {
  run (firstQuestion, questionAnswer);
}
