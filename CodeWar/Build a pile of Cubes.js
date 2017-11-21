function findNb(m) {
  let n = 0, sum = 0;
  while(sum < m){
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}


console.log(findNb(4183059834009));