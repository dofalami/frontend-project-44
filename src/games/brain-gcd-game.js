import run from '../index.js';
import getRandom from '../randomNum.js';

const firstQuestion = 'Find the greatest common divisor of given numbers.';

const questionAnswer = () => {
    const randomNumber1 = getRandom();
    const randomNumber2 = getRandom();
    const expression = randomNumber1 + ' ' + randomNumber2;
    let correctAnswer = '';

    if (randomNumber1 >= randomNumber2) {
        const divisor = randomNumber1;
        console.log(divisor);
    }
    else {
        const divisor = randomNumber2;
        console.log(divisor);
    }
    
    while (expression % divisor !== 0) {
        divisor = divisor - 1;
    }
    correctAnswer = divisor;

    return [expression, correctAnswer];
}
export default () => {
    run (firstQuestion, questionAnswer);
  }