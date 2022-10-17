import userName from '../src/cli.js';
import readlineSync from 'readline-sync';
import getRandom from '../src/randomNum.js';

export default function brainEvenGame() {
  userName();

console.log('Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ' + getRandom());

const question = readlineSync.question('Your answer: ');
console.log(question);
};
