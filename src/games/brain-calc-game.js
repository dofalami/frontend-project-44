// import readlineSync from 'readline-sync';
import * as gameLogic from '../index.js';
import getRandom from '../randomNum.js';
import randomOperator from '../randomOperator.js';

export default function brainCalcGame() {
  gameLogic();

  const firstQuestion = 'What is the result of the expression?';

  const number1 = `${getRandom()}`;
  const number2 = `${getRandom()}`;
  const operator = `${randomOperator()}`;

  const expression = number1 + ' ' + operator + ' ' + number2;
  const correctAnswer = eval(expression);

  questionAnswer();

 // gameLogic();

//  console.log('Question: ' + number1 + ' ' + operator + ' ' + number2);
//  console.log(userAnswer);

//  if (correctAnswer == yourAnswer) {
//    console.log('Correct!');
//    i += 1;
//  } else {
//      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
//    }
}

// export { expression };


