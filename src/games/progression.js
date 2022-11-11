import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../helpers.js';

const minStep = 2;
const maxStep = 10;
const minFirst = 1;
const maxFirst = 50;

const description = 'What number is missing in the progression?';

const makeProgression = (first, step, length = 10) => {
  const progression = [];

  for (let i = 1; i !== length; i += 1) {
    progression.push(first + (step * i));
  }
  return progression;
};

const generateRound = () => {
  const first = getRandomNumber(minFirst, maxFirst);
  const step = getRandomNumber(minStep, maxStep);
  const progression = makeProgression(first, step);
  const hiddenIndex = getRandomIndex(progression);
  const correctAnswer = String(progression.splice(hiddenIndex, 1, '..'));
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
