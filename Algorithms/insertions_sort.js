function insertionSort(input){

  for(let i = 1; i < input.length; i++){ //loop through sorted part
    for(let j = 0; j < i; j++){ //loop through unsorted part
      if(input[j] > input[i]){
        const spliced = input.splice(i, 1);
        input.splice(j, 0, spliced[0]);
      }
    }
  }
  return input; 
}
console.log(insertionSort([20, -10, 10, 4, 299, 29 ])); //[ -10, -10, 2, 4, 20, 299 ]