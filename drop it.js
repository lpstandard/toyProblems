// Drop the elements of an array (first argument), starting from the front, 
// until the predicate (second argument) returns true.
// The second argument, func, is a function you'll use 
// to test the first elements of the array to decide if you 
// should drop it or not.
// Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
  // Drop them elements.
  var len = arr.length; 

  for(var i = 0; i < len; i++){
    if(func(arr[0])){
      break;
    } else {
      arr.shift();
    }
  }

  return arr;

}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5; })); //[3, 9, 2]
