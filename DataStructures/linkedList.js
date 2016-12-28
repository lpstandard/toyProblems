  // Instantiates a new list
  // by setting the head and tail to a
  // new node with the initial value
  function LinkedList(){
    this.head = null; 
    this.tail = null; 
  };

  // Add new head
  LinkedList.prototype.addToHead = function(val){
    var newNode = new Node(val, this.head, null);
    // If head already presents, previous points to this new node
    if(this.head){
      this.head.pre = newNode; 
    } else {
      this.tail = newNode;
    }
    this.head = newNode; 
  }

  // Add a new value to the linked list
  LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) {
      // If tail already presents -> point next
      this.tail.next = newNode; 
    } else {
      // pointer to point to the new node
      this.head = newNode;
    }
      this.tail = newNode; 
  }

  // // Remove an element from the head of the list
  LinkedList.prototype.removeHead = function() {
    if (!this.head) { 
      // The list is empty
      return null; 
    }
      var val = this.head.value;
      this.head = this.head.next; 
    
    if(this.head){
      // head presents
      this.head.pre = null;
    } else {
      this.tail = null;
    }
    return val; 
  }

  LinkedList.prototype.removeTail = function() {
      if (!this.tail) {
        return null; 
      }  
        var val = this.tail.value;
        this.tail = this.tail.pre; 
      
        // tail presents
      if(this.tail) this.tail.next = null;
      else this.head = null;
      return val; 
    }
  // // Determing if the linked list contains the target value
    LinkedList.prototype.search = function(val) {
      // Starting at the list head,
      // Keep going through next nodes until either 
      // we've found the target val or we reach the end
      var currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === val) {
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
      return null;
    }

  // Node class to store node value as well 
  // as next node pointer
  function Node(val, next, pre){
    this.value = val;
    this.next = next;
    this.pre = pre; 
  }

var ll = new LinkedList();

ll.addToHead(123)
ll.addToHead('two')
ll.addToHead(23)
ll.addToTail(21312)
ll.addToTail(1231231)
ll.addToTail(1231)

console.log(ll.search(23))
 