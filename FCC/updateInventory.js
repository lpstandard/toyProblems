function updateInventory(arr1, arr2) {
  var inventory = arr1.concat(arr2).reduce((memo, next) => {
    if(memo[next[1]]){
      memo[next[1]] += next[0]; 
    } else {
      memo[next[1]] = next[0];
    }
    return memo; 
  }, {});

  return Object.keys(inventory).map((value) => {
    return [inventory[value], value];
  }).sort((a, b)=>{
    if(a[1] === b[1]){
      return 0;
    }else{
      return a[1] > b[1]? 1 : -1;
    }
  });
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

var result = updateInventory(curInv, newInv);
console.log(result);