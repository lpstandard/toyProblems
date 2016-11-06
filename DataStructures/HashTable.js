var HashTable = function(size){
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length; 
}

function HashNode(key, value, next){
  this.key = key; 
  this.value = value; 
  this.next = next || null; 
}

HashTable.prototype.hash = function(key){
  var total = 0; 
  for(var i = 0; i < key.length; i++){
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets; 
  return bucket;
}

HashTable.prototype.insert = function(key, value){
  var index = this.hash(key);

  if(!this.buckets[index]) { 
    this.buckets[index] = new HashNode(key, value);
  } else if (this.buckets[index].key === key){
    this.buckets[index].value = value; 
  } else {
    var currentNode = this.buckets[index];
    while(currentNode.next){
      if(currentNode.next.key === key){
        currentNode.next.value = value; 
      } 
      currentNode = currentNode.next;
    } 
      currentNode.next = new HashNode(key, value);
    }
}

HashTable.prototype.get = function(key){
  var index = this.hash(key);
  if(!this.buckets){
    return null; 
  } else {
    var currentNode = this.buckets[index];
    while(currentNode){
      if(currentNode.key === key){
        return currentNode.value;
      }
      currentNode = currentNode.next; 
    }
    return null;
  }
}


var ht = new HashTable(30);

ht.insert('Dean', 'dean@gmail.com')
ht.insert('Megan', 'megan@gmail.com')
ht.insert('Dane', 'dane@yahoo.com')
ht.insert('Dean', 'deanmachine@gmail.com')
ht.insert('Megan', 'megansmith@gmail.com')
ht.insert('Dane', 'dane@gmail.com')


console.log(ht.get('Dane'))