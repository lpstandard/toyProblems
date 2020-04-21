function addBinary(a,b) {
  let sum = a + b;

  return toBinary(sum);

  function toBinary(sum){
    let res = "";

    if(sum === 0){
      res = '0'; 
    } 
    
    while(sum > 0){
      const reminder = sum % 2;
      res = reminder + res;
      sum = Math.floor(sum / 2)
    }
    return res;
  }
}

console.log(addBinary(3,4))
