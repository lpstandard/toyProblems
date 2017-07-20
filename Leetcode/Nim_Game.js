var canWinNim = function(n) {
  if(n < 4 || n % 4 !== 0) {
    return true;
  } else if(n % 4 === 0) {
    return false;   
  }
};

console.log(canWinNim(5))