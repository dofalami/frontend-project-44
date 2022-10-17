import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';
import getRandom from '../src/randomNum.js';

greeting();
export default function brainEvenGame() {
//  greeting();

  const randomNumber = getRandom();
  console.log('Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ' + randomNumber);

  const answer = readlineSync.question('Your answer: ');

  if (randomNumber % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
  }

  if (randomNumber % 2 === 1 && answer === 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${greeting()}!`);
  }
};
