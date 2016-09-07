// Find the smallest common multiple of the provided parameters that can be evenly divided 
// by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly 
// divisible by all numbers between 1 and 3.
// 
// 
function smallestCommons(arr) {
  let res, max = Math.max(arr[0], arr[1]), min = Math.min(arr[0], arr[1]), 
  temp = []; 

  // create an array with all the numbers between and include the given start and end value
  for(let i = max; i >= min; i--){
    temp.push(i);
  }
  
  // find the greatest common divison first by using Euclidean Algorithm 
  // (a = b * q + r, GCD(a, b) = GCD(b, r))
  const gcd = (x, y) => {
    return y === 0 ? x : gcd(y, x % y);
  }

  // LCM (a, b) = (a x b) / GCD (a, b)
  let lcm = temp[0];
  for(let i = 1; i < temp.length; i++){
    let GCD = gcd(lcm, temp[i]);
    lcm = (lcm * temp[i])/GCD;
  }
  
  return lcm;

}


console.log(smallestCommons([1,5])); // => 1x2x3x4x5 = 60
console.log(smallestCommons([1,13])); // => = 360360