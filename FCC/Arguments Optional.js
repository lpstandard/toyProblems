
function addTogether() {
  let arr = Array.prototype.slice.call(arguments);
  console.log(arr.length);
  //helper to check if a number is undefined
  const checker = (num) => {
    return typeof num !== 'number' ? undefined : num;
  };

  if (arr.length > 1){
    if(checker(arr[0]) === undefined || checker(arr[1]) === undefined){
      return undefined; 
    } else {
      return arr[0] + arr[1];
    } 
  } else {
    let arg = arr[0];
    if(checker(arg)){
      return (arg2) => {
        if(arg === undefined || checker(arg2) === undefined){
          return undefined;
        } else {
          return arg + arg2; 
        }
      }
    }
  }
}

console.log(addTogether(2)(3));