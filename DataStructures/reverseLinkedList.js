const reverseLinkedList = (head) => {
  
  if(!head || !head.next){
    return head; 
  }

  let current_head = head.next;
  let reversed_head = head; 
  reversed_head.next = null;

  while(current_head) {
    let temp = current_head;
    current_head = current_head.next; 

    temp.next = reverse_head;
    reversed_head = temp; 
  }

  return reversed_head; 
}

