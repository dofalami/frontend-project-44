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

  for (let i = 1; i !== lengthLimit; i += 1) {
    progression.push(firstNum + (step * i));
  }
  return progression;
};

const generateRound = () => {
  const firstNum = getRandomNumber(minFirst, maxFirst);
  const step = getRandomNumber(minStep, maxStep);
  const progression = makeProgression(firstNum, step);
  const hiddenIndex = getRandomIndex(progression);
//  const number = progression[hiddenIndex];
  progression.splice(hiddenIndex, 1, '..');
  const correctAnswer = String(progression[hiddenIndex]);
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
