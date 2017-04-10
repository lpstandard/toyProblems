// Write a function that takes a string as input and returns the string reversed.
// Example:
// Given s = "hello", return "olleh".

function reverseString(s) {
  let result = [];
  s = s.split('');

  for(let i = s.length - 1; i >= 0 ; i--) {
    result.push(s[i]);
  }

  return result.join('');
};

console.log(reverseString("hello"));