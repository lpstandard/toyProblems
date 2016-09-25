nthFibonacci = function(n) {  

  // n    = 0 1 2 3 4 5
  // res  = 0 1 1 2 3 5
  // n = 0 -> res = 0; n = 1 -> res = 0 + 1; n = 2 -> res = (n-1) + n
  let fib = [0, 1, 1, 2, 3, 5]; 
  let res; 
  // const helper = (n) => {
  //   for(let i = 1; i < i + 1; i++){
  //     res = (i-1) + i; 
  //   }
  // } 
  
    if( n === 0){
      res = 0; 
    }
    if( n === 1){
      res = 1; 
    }
    if( n >= 2){
      
    }
  
  
  return res;
};

console.log(nthFibonacci(2));