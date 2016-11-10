function sym(args) {
  args = Array.prototype.slice.call(arguments);
  var newArr = args[0].concat(args[1]);

  return args.reduce(function(memo, item){
    memo = removeDup(memo);
    item = removeDup(item);
    memo = diffArray(memo, item);
    return memo; 
  }); 
}

function removeDup(arr){
  var result = []; 
  arr.forEach(function(value){
    if(result.indexOf(value) < 0){
      result.push(value);
    }
  });
  return result; 
}

function diffArray(arr1, arr2) {
  var arr = arr1.concat(arr2);
  return arr.filter(function(item, i){
    if(arr.slice(i+1).indexOf(item) === -1 && arr.slice(0, i).indexOf(item) === -1){
      return item; 
    }
  });
}

sym([1, 2, 3], [5, 2, 1, 4]); //[3, 4, 5]
console.log(sym([1, 2, 3], [5, 2, 1, 4]))
