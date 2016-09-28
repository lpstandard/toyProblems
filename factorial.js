function factorial(num){
  if( num === 1){
    return 1;
  } else {

    return num * factorial(num - 1);
  }
  
}

console.log(factorial(4));// 2
// console.log(factorial(3));// 6
// console.log(factorial(4));// 24