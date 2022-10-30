import run from '../index.js';
import { getRandom, getRandomIndex } from '../randomNum.js';

const minStep = 2;
const maxStep = 10;
const firstNumMin = 1;
const firstNumMax = 50;
const minIndex = 0;
const maxIndex = 9;

// a_n = a_1 + d * (n - 1) !!! или просто взять соответствующее число из ..
const firstQuestion = 'What number is missing in the progression?';

const makeProgression = () => {
    const firstNum = getRandom(firstNumMin, firstNumMax);
    const step = getRandom(minStep, maxStep);
    const progLength = 10;

    let progression = [];
    progression.push(firstNum);
    let numOfProg = firstNum;

    for (let i = 1; i != progLength; i = i + 1) {
        numOfProg = numOfProg + step;
        progression.push(numOfProg);
    }
    return progression;
}

const questionAnswer = () => {
    const progression = makeProgression();
    const correctProgression = progression;
    let startIndex = getRandomIndex(progression);
    let numberOfRemove = 1;
    progression.splice(startIndex, numberOfRemove, '..');
    const expression = progression.join(' ');

    const correctAnswer = correctProgression[startIndex];
    // const expectedAnswer = String(number);
    // const question = progression.join(' ');

    return [expression, correctAnswer];
}

export default () => {
    run (firstQuestion, questionAnswer);
}