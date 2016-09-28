nthFibonacci = function(n) {  

  // n    = 0 1 2 3 4 5
  // res  = 0 1 1 2 3 5
  // n = 0 -> res = 0; n = 1 -> res = 0 + 1; n = 2 -> res = (n-1) + n
  if(n <= 2){
    return 1;
  } else {
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
  } 

};

console.log(nthFibonacci(4));