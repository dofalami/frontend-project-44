// логика игр
import readlineSync from 'readline-sync';
import getRandom from '../randomNum.js';

export function greeting() {
    console.log('Welcome to the Brain Games!');

    const name = () => readlineSync.question('May I have your name? ');
    const userName = name();
    console.log(`Hello, ${userName}!`);
}

export function questionAnswer() {
    const numberOfRounds = 3;
    let i = 0;
    while (i < numberOfRounds) {
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
    if (i >= 3) {
      console.log(`Congratulations, ${userName}!`);
    }
}