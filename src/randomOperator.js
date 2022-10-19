export default function randomOperator() {
    const opindex = Math.random() * 3 + 1;
    const result = Math.trunc(opindex);
  
    switch(result) {
      case 1:
        operator = '+';
        break;
        
      case 2:
        operator = '-';
        break;
        
      case 3:
        operator = '*';
        break;
    }
}
return operator;
