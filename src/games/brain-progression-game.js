import run from '../index.js';
import { getRandom, getRandomIndex } from '../randomNum.js';

const minStep = 2;
const maxStep = 10;
const firstNumMin = 1;
const firstNumMax = 50;

const firstQuestion = 'What number is missing in the progression?';

const makeProgression = () => {
    const firstNum = getRandom(firstNumMin, firstNumMax);
    const step = getRandom(minStep, maxStep);
    const progressionLength = 10;

    let progression = [];
    progression.push(firstNum);
    let numOfProgression = firstNum;

    for (let i = 1; i != progressionLength; i = i + 1) {
        numOfProgression = numOfProgression + step;
        progression.push(numOfProgression);
    }
    return progression;
}

const questionAnswer = () => {
    const progression = makeProgression();
    const missingNum = getRandomIndex(progression);
    const number = progression[missingNum];
    let numberOfRemove = 1;
    progression.splice(missingNum, numberOfRemove, '..');
    const correctAnswer = number;
    const expression = progression.join(' ');

    return [expression, correctAnswer];
}

export default () => {
    run (firstQuestion, questionAnswer);
}