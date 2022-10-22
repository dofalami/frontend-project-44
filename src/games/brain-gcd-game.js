import run from '../index.js';
import getRandom from '../randomNum.js';

const firstQuestion = 'Find the greatest common divisor of given numbers.';

const questionAnswer = () => {
    const randomNumber = getRandom();
    const expression = randomNumber + ' ' + randomNumber;
    let correctAnswer = '2';

    return [expression, correctAnswer];
}
export default () => {
    run (firstQuestion, questionAnswer);
  }