// import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';
import getRandom from '../src/randomNum.js';

export default function brainEvenGame() {
  console.log('Welcome to the Brain Games!');

  const name = () => readlineSync.question('May I have your name? ');
  const userName = name();
  console.log(`Hello, ${userName}!`);

  const randomNumber = getRandom();
  console.log('Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ' + randomNumber);

  const answer = readlineSync.question('Your answer: ');

  if (randomNumber % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
  }

  if (randomNumber % 2 === 1 && answer === 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
  }
};
