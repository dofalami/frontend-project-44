import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../helpers.js';

const minStep = 2;
const maxStep = 10;
const firstNumMin = 1;
const firstNumMax = 50;

const description = 'What number is missing in the progression?';

const makeProgression = () => {
  const firstNum = getRandomNumber(firstNumMin, firstNumMax);
  const step = getRandomNumber(minStep, maxStep);
  const progressionLength = 10;

  const progression = [];
  progression.push(firstNum);
  let numOfProgression = firstNum;

  for (let i = 1; i !== progressionLength; i += 1) {
    numOfProgression += step;
    progression.push(numOfProgression);
  }
  return progression;
};

const genearateRound = () => {
  const progression = makeProgression();
  const missingNum = getRandomIndex(progression);
  const number = progression[missingNum];
  const numberOfRemove = 1;
  progression.splice(missingNum, numberOfRemove, '..');
  const correctAnswer = String(number);
  const expression = progression.join(' ');

  return [expression, correctAnswer];
};

export default () => {
  run(description, genearateRound);
};
