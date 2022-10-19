// import readlineSync from 'readline-sync';
import { greeting, questionAnswer } from '../index.js';
import getRandom from '../randomNum.js';
import randomOperator from '../randomOperator.js';

export default function brainCalcGame() {
  greeting();

  console.log('What is the result of the expression?');

  questionAnswer;

  const number1 = `${getRandom()}`;
  const number2 = `${getRandom()}`;
  const operator = `${randomOperator()}`;

  const expression = number1 + ' ' + operator + ' ' + number2;
  const correctAnswer = eval(expression);
  console.log('Question: ' + number1 + ' ' + operator + ' ' + number2);

  if (correctAnswer == yourAnswer) {
    console.log('Correct!');
    i += 1;
  } else {
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    }
}
if (i >= 3) {
  console.log(`Congratulations, ${userName}!`);
}

