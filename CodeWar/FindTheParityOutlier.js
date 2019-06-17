function findOutlier(integers){
  //your code here
  let odd = [], even = [];
 for(let i = 0; i < integers.length; i++){
   if(integers[i] % 2 === 0){
     even.push(integers[i]);
   } else {
     odd.push(integers[i]);
   }
 }
  return odd.length === 1 ? odd[0] : even[0];
}