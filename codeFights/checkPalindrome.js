const isPalindrome = (input) => {
  return input === input.split('').reverse().join('');
}

console.log(isPalindrome('aabc'));
console.log(isPalindrome('aabaa'));