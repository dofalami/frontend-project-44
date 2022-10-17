import userName from '../src/cli.js';
import readlineSync from 'readline-sync';
import getRandom from '../src/randomNum.js';

export default brainEvenGame = () => {
  userName();

console.log('Answer "yes" if the number is even, otherwise answer "no". \n Question: ' + getRandom());

const question = readlineSync.question('Your answer: ');
console.log(question);
};
