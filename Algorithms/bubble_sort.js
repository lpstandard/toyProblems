// If the first element is greater than the second element, 
// it swaps the two. It then compares the second to the third, 
// and the third to the fourth, and so on. In this way, the largest
// values ‘bubble’ to the end of the array. Once it gets to the end
// of the array, it starts over and repeats the process until the 
// array is sorted numerically.

function bubbleSort (input) {
  for(let i = 0 ; i < input.length - 1; i++){
    for(let j = i + 1; j < input.length; j++){
      while(input[i] > input[j]){
        let temp = input[i];
        input[i] = input[j]; 
        input[j] = temp; 
      }
    }
  }

  return input; 
}
console.log(bubbleSort([ 20, -10, 10, 4, 299, 29 ])); //[ -10, -10, 2, 4, 20, 299 ]


