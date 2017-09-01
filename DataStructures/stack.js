function Stack(){
  this.storage = "";
}

Stack.prototype.push = function(str){
  this.storage = this.storage.concat('', str);

  return this.storage;
}

Stack.prototype.pop = function(){
  if(this.storage.length === 0){
    return 
  }
  return this.storage[storage.length - 1];
}

Stack.prototype.size = function(){
  return this.storage.length;
}

stack = new Stack()
stack.push('Hi')
stack.push('Hello')
stack.pop()
stack.pop()

console.log(stack.pop());
