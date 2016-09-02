//Sum all the prime numbers up to and including the provided number. 
//A prime number is defined as a number greater than one and having
// only two divisors, one and itself. For example, 2 is a prime number 
// because it's only divisible by one and two.

function sumPrimes(num) {
  
  function isPrime(number){
    for (var i = 2; i <= number; i++){
      if(number % i === 0 && number != i){
      // return false if it is divisible by any number that is not itself.
        return false;
      }
    }
     // if it passes the for loops conditions it is a prime
    return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1){
    return 0;
  }

  return isPrime(num) === true ? num + sumPrimes(num - 1) : sumPrimes(num - 1);
}

console.log(sumPrimes(977)); //2+3+5+7 = 17