const removeEverySecond = (arr) => {
  
  return arr.filter((elem, index) => {
    return index % 2 === 0;
  })

}

console.log(removeEverySecond([1, 2, 3])) // index = 0, 1, 2; 0%2 = 0, 1%2 = 1, 2%2 = 0
console.log(removeEverySecond([1, 2, 3, 4])) // index = 0, 1, 2, 3; 0%2 = 0, 1%2 = 1, 2%2 = 0, 3%2 = 1