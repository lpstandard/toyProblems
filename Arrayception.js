//Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
function arrayception(array){
  var max = 0;
  for (var i=0; i < array.length; i++){  
    if (array[i].length === 0){   
      count = 0;
    }
    else if (Array.isArray(array[i])){
      count = arrayception(array[i]);
      if (count>0) count+=1
    }
    else{
      count = 1;
    }
    
    if (count > max) max = count;
  }
  return max 
}


// console.log(arrayception([[5], [ ]])); //2
// console.log(arrayception([10, 20, 30, 40])); //1
console.log(arrayception([])); //0
console.log(arrayception([[10, 20], [30, [40]]])); //4
console.log(arrayception([[[]]])); //0