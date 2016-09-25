
function mergeSort(arr){
  let left = [], right = [];
  if(arr.length < 2){
    return arr; 
  }

  for(let i = 0; i < arr.length; i++){
    left.push(arr[i]); 
    right.push(arr[(arr.length/2)]); 

	}
	quickSort(arr); 

	function quickSort(arr) {
	  var left = []; 
	  var right = []; 
	 
	  if(arr.length === 0){
	    return []; 
	  }
	  var pivot = arr.splice(0, 1);
	  var result; 
	  for(var i = 0; i < arr.length; i++){
	  	if(arr[i] < pivot){
	  		left.push(arr[i]); 
	  	} else {
	  		right.push(arr[i]);		
	  	}
	  }
	  return quickSort(left).concat(pivot, quickSort(right));
	}
	return arr;
}

console.log(mergeSort([8,7,3,3,9,2,4,5,1]));