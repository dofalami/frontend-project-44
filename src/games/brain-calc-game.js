import readlineSync from 'readline-sync';
import getRandom from '../randomNum.js';
import randomOperator from '../randomNum.js';

export default function brainCalcGame() {
  console.log('Welcome to the Brain Games!');

  const name = () => readlineSync.question('May I have your name? ');
  const userName = name();
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  let i = 0;
  for (; i < 3;) {
    const randomNumber = `${getRandom()} + ${randomOperator()} + ${getRandom()}`;
    const correctAnswer = randomNumber;
    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
        console.log('Correct!');
        i += 1;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'correctAnswer'. Let's try again, ${userName}!`);
        break;
      }
    }
//  if (i >= 3) {
//    console.log(`Congratulations, ${userName}!`);
}
