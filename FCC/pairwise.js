
function pairwise(arr, arg) {  
  var total = 0;
  var indexArray = [];
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === arg && indexArray.indexOf(i) === -1 && indexArray.indexOf(j) === -1) {
        indexArray.push(i);
        indexArray.push(j); 
        total += i + j; 
      }

    }
  }
  return total;
}

pairwise([1,4,2,3,0,5], 7); // 4+3 => 1+3=4 & 2+5 => 2+5 = 7 4+7 = 11
pairwise([0, 0, 0, 0, 1, 1], 1);