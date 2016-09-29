// // the divided sublists always have been sorted for all mergesort
// function mergeSort(arr){
//   let left = [], right = [];
//   if(arr.length < 2){ //base case
//     return arr; 
//   }

//   for(let i = 0; i < arr.length; i++){
//     left.push(arr[i]); 
//     right.push(arr[(arr.length/2)]); 

// 	}
// 	quickSort(arr); 

// 	function quickSort(arr) {
// 	  var left = []; 
// 	  var right = []; 
	 
// 	  if(arr.length === 0){
// 	    return []; 
// 	  }
// 	  var pivot = arr.splice(0, 1);
// 	  var result; 
// 	  for(var i = 0; i < arr.length; i++){
// 	  	if(arr[i] < pivot){
// 	  		left.push(arr[i]); 
// 	  	} else {
// 	  		right.push(arr[i]);		
// 	  	}
// 	  }
// 	  return quickSort(left).concat(pivot, quickSort(right));
// 	}
// 	return arr;
// }

const mergeSort = (nums) => {
  if(nums.length < 2){
    return nums; 
  }

  const length = nums.length, middle = Math.floor(length/2), 
  left = nums.slice(0, middle), right = nums.slice(middle, length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return stitch(sortedLeft, sortedRight);
}  
  const stitch = (left, right) => {
    let result = []; 

    while(left.length && right.length){
      if(left[0] <= right[0]){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    // while(left.length){
    //   result.push(left.shift());  
    // }
    // while(right.length){
    //   result.push(right.shift());  
    // }
    return [...result, ...left, ...right]; 
}
console.log(mergeSort([8,7,3,3,9,2,4,5,1]));