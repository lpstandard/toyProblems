// Welcome to Facebook!

// This is just a simple shared plaintext pad, with no execution capabilities.

// When you know what language you'd like to use for your interview,
// simply choose it from the dropdown in the top bar.

// Enjoy your interview!
  
// You are given an array of integers. Write an algorithm that brings all nonzero elements to the left of the array,
// and returns the number of nonzero elements.
 
// Condition:
// The algorithm should operate in place, i.e. shouldn't create a new array.
// The order of the nonzero elements does not matter. The numbers that remain in the right portion of the array can be anything

// Example:
// Given the array [ 1, 0, 2, 0, 0, 3, 4 ], a possible answer is [ 4, 1, 3, 2, ?, ?, ? ], 4 non-zero elements, 
// where "?" can be any number. Code should have good complexity and minimize the number of writes to the array

function moveNonZero(array) {
  let result = {};
  for(let i = 0; i < array.length; i++){
    for(let j = array.length; j >= 0; j--){
      if(array[i] === 0){
        counter = 0;
        array.splice(i, 1);
        array.push(0);
        counter++;
        console.log(counter);
      }
        // array[array.length - 1] = array[i];
        // array[i] = temp;
    }  
  }

  result['array'] = array;
  result['counter'] = counter;
  return result;

}

console.log(moveNonZero([ 1, 0, 2, 0, 0, 3, 4 ]));

