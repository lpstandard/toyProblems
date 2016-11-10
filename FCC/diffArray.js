function diffArray(arr1, arr2) {
  var arr = arr1.concat(arr2);
  return arr.filter(function(item, i){
    if(arr.slice(i+1).indexOf(item) === -1 && arr.slice(0, i).indexOf(item) === -1){
      return item; 
    }
  });
}

 
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) // [4]