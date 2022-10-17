import userName from '../src/cli.js';
import readlineSync from 'readline-sync';
import getRandom from '../src/randomNum.js';

export default function brainEvenGame() {
  userName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ' + getRandom());

  const answer = readlineSync.question('Your answer: ');

  If (getRandom() % 2 === 0) && (answer = 'yes') {
    return 'Correct!';
  }

  If (getRandom() % 2 === 1) && (answer = 'yes') {
    return `'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${userName}!`;
  }
};
