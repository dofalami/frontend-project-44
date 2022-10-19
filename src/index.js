// логика игр
import readlineSync from 'readline-sync';
// import getRandom  from '../randomNum.js';

function greeting() {
    console.log('Welcome to the Brain Games!');

    const name = () => readlineSync.question('May I have your name? ');
    const userName = name();
    console.log(`Hello, ${userName}!`);
}

function questionAnswer() {
  const numberOfRounds = 3;
  let i = 0;
  while (i < numberOfRounds) {
    console.log(`Question: ${expression}`);
    const userAnswer = () => readlineSync.question('Your answer: ');

    if (userAnswer = correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
      break;
    }
  }
  if (i >= 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export { greeting, questionAnswer };
