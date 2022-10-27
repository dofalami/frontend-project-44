import run from '../index.js';
import getRandom from '../randomNum.js';

const firstQuestion = 'Find the greatest common divisor of given numbers.';

const questionAnswer = () => {
    const randomNumber1 = getRandom();
    const randomNumber2 = getRandom();
    const expression = randomNumber1 + ' ' + randomNumber2;
//    let correctAnswer = '';

    let divisor = '';
    let smollNum = '';
    let bigNum = '';
    let correctAnswer = '';
    
    if (randomNumber1 == 0) correctAnswer = randomNumber2;

    const a = randomNumber1;
    const b = randomNumber2;

    while (b != 0) {
        if (a > b) a = a - b;
        else b = b - a;
    }
    correctAnswer = a;
    
    console.log(divisor);
    console.log(correctAnswer);

    return [expression, correctAnswer];
}
export default () => {
    run (firstQuestion, questionAnswer);
  }