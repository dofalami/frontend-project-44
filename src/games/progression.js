import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../helpers.js';

const minStep = 2;
const maxStep = 10;
const minFirst = 1;
const maxFirst = 50;
const lengthLimit = 10;

const description = 'What number is missing in the progression?';

const makeProgression = (firstNum, step) => {
  const progression = [];
  progression.push(firstNum);
  let progressionCount = firstNum;

  for (let i = 1; i !== lengthLimit; i += 1) {
    progressionCount += step;
    progression.push(progressionCount);
  }
  return progression;
};

const generateRound = () => {
  const firstNum = getRandomNumber(minFirst, maxFirst);
  const step = getRandomNumber(minStep, maxStep);
  const progression = makeProgression(firstNum, step);
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
