// import readlineSync from 'readline-sync';
import run from '../index.js';
import getRandom from '../randomNum.js';
// import randomOperator from '../randomOperator.js';

  const firstQuestion = 'What is the result of the expression?';

function randomOperator() {
    const opindex = Math.random() * 3 + 1;
    const result = Math.trunc(opindex);
  
    switch(result) {
        case 1:
          return '+';
          
                  
        case 2:      
          return '-';
                          
                  
        case 3:
          return '*';
          
    }
}

  const questionAnswer = () => {
  const number1 = `${getRandom()}`;
  const number2 = `${getRandom()}`;
  const operator = `${randomOperator()}`;

  const expression = number1 + ' ' + operator + ' ' + number2;
  const correctAnswer = eval(expression);
  return expression, correctAnswer;
  }

  export default () => {
    run (firstQuestion, questionAnswer);
  };
