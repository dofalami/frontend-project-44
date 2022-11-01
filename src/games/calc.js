import run from '../index.js';
import { getRandomNum, getData } from '../helpers.js';

const firstQuestion = 'What is the result of the expression?';
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

const GetQuestionAnswer = () => {
  const number1 = getRandomNum(minNum, maxNum);
  const number2 = getRandomNum(minNum, maxNum);
  const index = getData(operators);
  const operator = operators[index];
  const expression = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));

  return [expression, correctAnswer];
};

export default () => {
  run(firstQuestion, GetQuestionAnswer);
};
