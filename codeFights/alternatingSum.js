function alternatingSums(a) {
  let result = [], oddArr = 0, evenArr = 0;
  a.forEach((elem, i) => {
    if(i % 2 === 0){
      oddArr += elem;
    } else {
      evenArr += elem;
    }
  });
  return [oddArr, evenArr];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));