function Queue(){
  this.storage = {}; 
  this.start = -1; 
  this.end = -1; 
}

Queue.prototype.enqueue = function(value){
  this.end++;
  this.storage[this.end] = value;
  return value; 
}

Queue.prototype.dequeue = function(){
  if(this.end - this.start){
    this.start++;
    var result = this.storage[this.start];
    delete this.storage[this.start];

    return result;
  }
  return undefined; 
}

Queue.prototype.size = function(){

  return this.end - this.start; 
}

var qq = new Queue();
qq.enqueue(1);


console.log('this is', qq)
console.log('qq size', qq.size())
