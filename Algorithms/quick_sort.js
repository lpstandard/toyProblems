const quickSort = (array) => {
  if(array.length <= 1){
    return array;
  }

  const pivot = array[array.length - 1]; //pick the last item as the pivot
  let left = []; 
  let right = []; 

  for (let i = 0; i < array.length - 1; i++) {
    if(array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([23, 5, 2, 900, 24])); //