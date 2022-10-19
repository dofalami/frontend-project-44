export default function randomOperator() {
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
