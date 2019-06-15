const reduce = (list, cb, memo) => {

  // let memo = initial || list[0]; // memo = 0, 1, 3, 6
  
  for (let i = 0; i < list.length; i++) {
    memo = cb(list[i], memo);
  }
   
  return memo;
};

console.log(reduce([1, 2, 3], (v, sum)=> v + sum, 0));