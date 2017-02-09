// Return the number of total permutations of the provided string that 
// don't have repeated consecutive letters. Assume that all characters 
// in the provided string are each unique. For example, aab should return
// 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
// but only 2 of them (aba and aba) don't have the same letter (in this case a)
// repeating.
// permAlone = (str) => {
//   return 
// }

// permLength = (str) => {
//   let perm;
//   if(str.length <= 3){
//     return str.length * (str.length - 1);
//   } 
//   if(str.length > 3){
//     return permLength(str)
//   }
  
// }
// Heap's Algorithm
generate = (n, array) => {
  if(n === 1) {
    return array
  } else {
    for(let i = 0; i < n - 1; i++){
      generate(n - 1, array);
      if(n % 2 === 0){
        array[i] = array[n - 1];
      } else {
        array[0] = array[n - 1];
      }
    }
  }
  generate(n - 1, array);
}

// console.log(permAlone("aab")) //2
// console.log(permAlone("aaa")) //0
// console.log(permAlone("aabb")) //2
// console.log(permAlone("abcdefa")) //3600
// console.log(permAlone("abfdefa")) //2640
// console.log(permAlone("zzzzzzzz")) //0
// console.log(permAlone("a")) //1
// console.log(permAlone("aaab")) //0
// console.log(permAlone("aaabb")) //12
let ans = generate(3, ['a', 'a', 'b']);
console.log(ans)


