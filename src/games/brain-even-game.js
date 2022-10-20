import run from '../index.js';
import getRandom from '../randomNum.js';

const firstQuestion = 'Answer "yes" if the number is even, otherwise answer "no".'

 const randomNumber = getRandom();

const questionAnswer = () => {
  const expression = eval(randomNumber);

    if (expression % 2 === 0) {
      if (userAnswer == 'yes') {
        userAnswer = correctAnswer;
      }
    }

    if (expression % 2 === 1) {
      if (userAnswer == 'no') {
        userAnswer = correctAnswer;
      }
    }

  return [expression, correctAnswer]; 
}

export default () => {
  run (firstQuestion, questionAnswer);
}
