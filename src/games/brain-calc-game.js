import readlineSync from 'readline-sync';
import getRandom from '../randomNum.js';
import randomOperator from '../randomNum.js';

export default function brainCalcGame() {
  console.log('Welcome to the Brain Games!');

  const name = () => readlineSync.question('May I have your name? ');
  const userName = name();
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const opindex = Math.random() * 3 + 1;
  const result = Math.trunc(opindex);
    
  switch(result) {
  case 1:
    answer = '+';
    break;
            
  case 2:      
    answer = '-';
    break;                
            
  case 3:
    answer = '*';
    break;
  }
// return operator;

  let i = 0;
  for (; i < 3;) {
    const randomNumber = `${getRandom}` `${answer}` `${getRandom}`;
//    const randomNumber = getRandom() + operator + getRandom();
    const correctAnswer = randomNumber;
    console.log(`Question: ${randomNumber}`);

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
