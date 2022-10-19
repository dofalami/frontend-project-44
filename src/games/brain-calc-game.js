import readlineSync from 'readline-sync';
import getRandom from '../randomNum.js';
// import randomOperator from '../randomOperator.js';

export default function brainCalcGame() {
  console.log('Welcome to the Brain Games!');

  const name = () => readlineSync.question('May I have your name? ');
  const userName = name();
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  let i = 0;
  for (; i < 3;) {
//    const randomNumber = `${getRandom()} ${randomOperator()} ${getRandom()}`;
//    const randomNumber = getRandom() + randomOperator() + getRandom();
    const number1 = `${getRandom()}`;
    const number2 = `${getRandom()}`;
    const operator = '+';

    const question = number1 + ' ' + operator + ' ' + number2;
    const correctAnswer = question;
    console.log('Question:' + number1 + ' ' + operator + ' ' + number2);

    const yourAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer == yourAnswer) {
        console.log('Correct!');
        i += 1;
      } else {
        console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
        break;
      }
    }
//  if (i >= 3) {
//    console.log(`Congratulations, ${userName}!`);
}
