function uniteUnique(arr) {
  let res = [], temp = Array.prototype.slice.call(arguments); 

  let reduced = temp.reduce((memo, item, i) => {
    return memo.concat(item);
  });

  reduced.forEach((item, i) => {
    if(res.indexOf(reduced[i]) < 0 ){
      res.push(reduced[i]);
    } 
  });

  return res;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // => [1, 3, 2, 5, 4]