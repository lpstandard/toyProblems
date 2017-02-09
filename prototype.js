// [1, 2, 3, 4, 5].any(isGreaterThanZero); //=> true
// [-1, 0].any(isGreaterThanZero); //=> false 

Array.prototype.any = function(cb) {
  for(let i = 0; i < this.length; i++){
    if(cb(this)) return true;
  }
  return false;
};

function isGreaterThanZero(array) {
  for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
      return false;
    }
  }
  return true;
}

console.log([1, 2, 3, 4, 5].any(isGreaterThanZero));
console.log([-1, 0].any(isGreaterThanZero));