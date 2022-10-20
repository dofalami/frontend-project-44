// import readlineSync from 'readline-sync';
import run from '../index.js';
import getRandom from '../randomNum.js';
import randomOperator from '../randomOperator.js';

  const firstQuestion = 'What is the result of the expression?';
  const questionAnswer = () => {
  const number1 = `${getRandom()}`;
  const number2 = `${getRandom()}`;
  const operator = `${randomOperator()}`;

  const expression = number1 + ' ' + operator + ' ' + number2;
  const correctAnswer = eval(expression);
  }

  export default () => {
    run (firstQuestion, questionAnswer);
  };
