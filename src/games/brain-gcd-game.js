import run from '../index.js';
import getRandom from '../randomNum.js';

const firstQuestion = 'Find the greatest common divisor of given numbers.';

const questionAnswer = () => {
    const randomNumber1 = getRandom();
    const randomNumber2 = getRandom();
    const expression = randomNumber1 + ' ' + randomNumber2;
//    let correctAnswer = '';
    console.log(expression);

    let divisor = '';
    let bigNum = '';
    if (randomNumber1 <= randomNumber2) {
        divisor = randomNumber1;
        bigNum = randomNumber2;
    }
    else {
        divisor = randomNumber2;
        bigNum = randomNumber1;
    }
    console.log(divisor);
    console.log(bigNum);
 // !!!!    
    while (bigNum % divisor != 0) {
        divisor = divisor - 1;
    }
    let correctAnswer = divisor;
    console.log(divisor);
    console.log(correctAnswer);

    return [expression, correctAnswer];
}
export default () => {
    run (firstQuestion, questionAnswer);
  }