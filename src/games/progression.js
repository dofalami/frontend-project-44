import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../helpers.js';

const minStep = 2;
const maxStep = 10;
const firstNumMin = 1;
const firstNumMax = 50;
const progressionLength = 10;

const description = 'What number is missing in the progression?';

const makeProgression = () => {
  const firstNum = getRandomNumber(firstNumMin, firstNumMax);
  const step = getRandomNumber(minStep, maxStep);

  const progression = [];
  progression.push(firstNum);
  let progressionCount = firstNum;

  for (let i = 1; i !== progressionLength; i += 1) {
    progressionCount += step;
    progression.push(progressionCount);
  }
  return progression;
};

const generateRound = () => {
  const progression = makeProgression();
  const missingNum = getRandomIndex(progression);
  const number = progression[missingNum];
  const removedNumbers = 1;
  progression.splice(missingNum, removedNumbers, '..');
  const correctAnswer = String(number);
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
