function isPalindrome(word)
{
  // Please write your code here.
    
  if(word.toLowerCase().split('').reverse().toString() === word.toLowerCase().split('').toString())
  {
    return true;
  } 
    return false;
  
}

console.log(isPalindrome('Deleveled'));
console.log('Word'.toLowerCase().split('').reverse());