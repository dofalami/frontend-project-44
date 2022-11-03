import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../helpers.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minNum = 1;
const maxNum = 10;

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;

    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const genearateRound = () => {
  const number1 = getRandomNumber(minNum, maxNum);
  const number2 = getRandomNumber(minNum, maxNum);
  const index = getRandomIndex(operators);
  const operator = operators[index];
  const expression = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));

  return [expression, correctAnswer];
};

export default () => {
  run(description, genearateRound);
};
