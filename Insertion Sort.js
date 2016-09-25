//Insertion Sort
function insertionSort (array) {
  // Write your code here, and
  // return your final answer.
  var current;
  for(var i = 1; i < array.length; i++){
  	current = array[i];   //checking current value
  	var j = i - 1; 
  	while(current < array[j]){
  		array[j+1] = array[i];
  		j--;
  	}
  	array[j+1] = current; 
  }
  return current; 
}

console.log(insertionSort([ { "value": 3 }, { "value": 1 }, { "value": 2 } ])) //[ { "value": 1 }, { "value": 2 }, { "value": 3 } ]
