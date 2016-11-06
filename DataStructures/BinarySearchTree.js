function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value){
  if(value <= this.value){
    if(!this.left) this.left = new BST(value); 
  } else if (value > this.value){
    if(!this.right) this.right = new BST(value); 
    else this.right.insert(value);
  }
}

BST.prototype.contains = function(value){
  if(value === this.value) {
    return true; 
  } else if(value < this.value){
    if(!this.left) return false; 
    else return this.left.contains(value);
  } else if (value > this.value){
    if(!this.right) return false;
    else return this.right.contains(value);
  }
}

BST.prototype.depthFirstTraversal = function(iterator, order){
  if(order === 'pre-order') iterator(this.value);
  if(this.left) this.left.depthFirstTraversal(iterator, order);
  if(order === 'in-order') iterator(this.value);
  if(this.right) this.right.depthFirstTraversal(iterator, order);
  if(order === 'post-order') iterator(this.value);

}

BST.prototype.breadFirstTraversal = function(iterator){
  var queue = [this];
  while(queue.length){
    var treeNode = queue.shift();
    iterator (treeNode);
    if(treeNode.left) queue.push(this.left);
    if(treeNode.right) queue.push(this.right);

  }
}

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

bst.depthFirstTraversal(log, 'post-order');

function log(node){
  console.log(node.value);
}

bst.breadFirstTraversal(log)
