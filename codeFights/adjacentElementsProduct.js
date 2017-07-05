function adjacentElementsProduct(inputArray) {

  return inputArray.reduce((accu, value, i) => {
    if(inputArray.length > i + 1) {
      return [
        ...accu,
        value * inputArray[i+1]
      ]
    } else {
      return accu;
    }
  }, []).reduce((accu, currentValue) => {
    return Math.max(accu, currentValue);
  })
}

console.log(adjacentElementsProduct([1, 2, -3, 5, 6, -7]))