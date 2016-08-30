// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

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