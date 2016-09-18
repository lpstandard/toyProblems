//Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {

  return arr.reduce((memo, item) => {
    if(Array.isArray(item)){
      return memo.concat(steamrollArray(item));
    } else {
      return memo.concat(item);
    }

  }, []);
 

}

console.log(steamrollArray([1, [2], [3, [[4]]]])); //[1, 2, 3, 4]
