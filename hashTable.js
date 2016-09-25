  var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;
    var size = 0; 
    var replaced = false; 

    table.insert = function(key, value){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      //YOUR CODE HERE
      var pairs = storage[index];
      var pair;
      for (var i = 0; i < pairs.length; i++) {
        pair = pairs[i];
        if (pair[0] === key) {
          pair[1] = value;
          replaced = true; 
        }
        if(!replaced){
          pairs.push([key, value]);
          size++; 
        }
      }
    };

    table.retrieve = function(key){
      //YOUR CODE HERE
      var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
      
    };

    table.remove = function(key){
      //YOUR CODE HERE 
    }
    return table;  
  };  
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };

//-------------------------------
var hashTable = makeHashTable();
      hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
      var value = hashTable.retrieve('William Shatner\'s most well known role');
     

console.log('value', value); //Captain Kirk