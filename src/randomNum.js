export default function getRandom() {
    const random = Math.random() * 100;
    const result = Math.trunc(random);
    return result;
  };

function randomOperator() {
  const opindex = Math.random() * 3 + 1;
  const result = Math.trunc(opindex);

  switch(result) {
    case 1:
      answer = '+';
      break;
      
    case 2:
      answer = '-';
      break;
      
    case 3:
      answer = '*';
      break;
  }
  console.log(answer);
}