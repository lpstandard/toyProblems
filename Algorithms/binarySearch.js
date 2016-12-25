const binarySearch = (array, key, low, high) => {

  let mid = low + Math.floor((high - low) / 2);
  
  if(low > high) {
    return -1;
  }

  if(array[mid] === key){
    return mid;
  } else if(array[mid] > key){
    return binarySearch(array, key, low, (mid - 1));
  } else {
    return binarySearch(array, key, (mid + 1), high);
  }
  

}
let array = [1, 2, 3, 4, 5]
var ans = binarySearch(array, 3, 0, (array.length - 1));
console.log(ans);