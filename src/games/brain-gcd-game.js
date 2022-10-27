import run from '../index.js';
import getRandom from '../randomNum.js';

const firstQuestion = 'Find the greatest common divisor of given numbers.';

const questionAnswer = () => {
    const randomNumber1 = getRandom();
    const randomNumber2 = getRandom();
    const expression = randomNumber1 + ' ' + randomNumber2;

    let correctAnswer = '';
    
    if (randomNumber1 == 0) correctAnswer = randomNumber2;

    let a = randomNumber1;
    let b = randomNumber2;

    while (b != 0) {
        if (a > b) a = a - b;
        else b = b - a;
    }
    correctAnswer = a;

    return [expression, correctAnswer];
}
export default () => {
    run (firstQuestion, questionAnswer);
  }