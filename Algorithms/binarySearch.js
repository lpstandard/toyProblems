// Given a sorted array of integers, return the index of the given key. 
// Return -1 if not found.

const binarySearch = (array, key) => {
  let result, low = 0, high = array.length - 1;

  while(low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    
    if(array[mid] === key) {
      return mid;
    }

    if(key < a[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

  }

  return -1;
}

let ans = binarySearch([1, 2, 3, 4, 5], 3);
console.log(ans);