// Check if the predicate (second argument) is truthy on all 
// elements of a collection (first argument).

function truthCheck(collection, pre) {
  var count = 0;
  for(var k in collection){
    if( collection[k].hasOwnProperty(pre)&& Boolean(collection[k][pre])){
      count++;
    } 

  }
 return collection.length === count;
}

console.log(truthCheck([{"single": "yes"}], "single"));
