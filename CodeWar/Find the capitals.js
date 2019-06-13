// Write a function that takes a single string (word) as argument. The function must return an 
// ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
  // Write your code here
  let arr = [], splitted = word.split('');
  
  for(let i = 0; i < splitted.length; i++){
    if(splitted[i].toUpperCase() === splitted[i]){
      arr.push(i);
    }
    console.log(i);
    console.log('splitted.length', splitted.length);
  }
    
  return arr;
};


console.log(capitals('AasdfB'));