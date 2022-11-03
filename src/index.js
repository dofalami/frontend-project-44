import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (description, generateRound) => {

  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  let i = 0;
  for (let i = 0; i < roundsCount; i += 1) {
    const [expression, correctAnswer] = generateRound();

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');

    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return false;
    }
  }
//  if (i >= 3) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }

  return [description, generateRound];
};
