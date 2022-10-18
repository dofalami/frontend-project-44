import readlineSync from 'readline-sync';
import getRandom from './randomNum.js';

export default function brainEvenGame() {
  console.log('Welcome to the Brain Games!');

  const name = () => readlineSync.question('May I have your name? ');
  const userName = name();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3;) {
    const randomNumber = getRandom();
    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
        i += 1;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
        break;
      }
    }

    if (randomNumber % 2 === 1) {
      if (answer === 'no') {
        console.log('Correct!');
        i += 1;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
        break;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
