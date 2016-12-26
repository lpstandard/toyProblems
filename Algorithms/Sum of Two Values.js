let sumTwo = (a, v) => {
  let left = 0, 
      right = a.length - 1;

  while(left < right){
    s = a[left] + a[right];
    if(v === s){
      return true;
    }
    if(s > v){
      right--;
    } else {
      left++; 
    }
  }

  return false; 
}

let array = [1, 3, 4, 5, 7, 14, 15], v = 11;
console.log(sumTwo(array, v));