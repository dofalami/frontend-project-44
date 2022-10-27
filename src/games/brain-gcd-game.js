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
    if (randomNumber1 <= randomNumber2) {
        smollNum = randomNumber1;
        bigNum = randomNumber2;
    }
    else {
        smollNum = randomNumber2;
        bigNum = randomNumber1;
    }
 // !!!!    
    for (divisor = smollNum - 1; (bigNum % divisor != 0) && (smollNum % divisor !== 0);) {
        divisor = divisor - 1;
    }
    const correctAnswer = divisor;
    console.log(divisor);
    console.log(correctAnswer);

    return [expression, correctAnswer];
}
export default () => {
    run (firstQuestion, questionAnswer);
  }