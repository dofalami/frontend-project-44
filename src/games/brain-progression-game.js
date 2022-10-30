import run from '../index.js';
import getRandom from '../randomNum.js';

function getRandomMin() {
    const random = Math.random() * 10;
    const getRandomMin = Math.trunc(random);
    return getRandomMin;
}
console.log(getRandomMin());

// a_n = a_1 + d * (n - 1) !!! или просто взять соответствующее число из ..
// 1. массив из рандом чисел до индекса 9, при этом числа идут в порядке прогрессии
        const firstNum = getRandom();
        const step = getRandomMin();

        let progression = [];
        progression.push(firstNum);

        const progLength = 10;
        let numOfProg = firstNum;

        for (let i = 1; i != progLength; i = i + 1) {
            numOfProg = numOfProg + step;
            progression.push(numOfProg);
        }
        console.log(progression);
        return progression;

const firstQuestion = 'What number is missing in the progression?';

const questionAnswer = () => {
//    const randomIndex = getRandomMin();
    // ПЕРЕДЕЛАТЬ РАНДОМ ИНДЕКС (ОТ 0 ДО 9)
    let startIndex = getRandomMin();;
    let numberOfRemove = 1;
    const expression = progression.splice(startIndex, numberOfRemove, '..');
    const correctAnswer = 42;

    return [expression, correctAnswer];
}

export default () => {
    run (firstQuestion, questionAnswer);
}