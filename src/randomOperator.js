export default function randomOperator() {
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
    const randomOperator = answer;
    return randomOperator;
}