function Stack(){
  this.storage = {};
  this.size = 0; 
}

Stack.prototype.push = function(value){
  this.storage[this.size] = value;
  this.size++; 
  return value;
}

Stack.prototype.pop = function(){
  if(this.size){
    this.size--;
    var result = this.storage[this.size]; 
    delete this.storage[this.size]
    return result;
  }

  return undefined; 
}

Stack.prototype.size = function(){
  return this.size; 
}

stack = new Stack()
stack.push(1)
stack.push(12)
stack.pop()
stack.pop()

console.log(stack.pop());
