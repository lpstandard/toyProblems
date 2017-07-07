function reverse(head) {

  if(!head || !head.next) {
    return head;
  }

  let reversed = head
  let list_to_do = head.next;

  // begin to reverse
  reversed.next = null;  
  
  while(list_to_do) {
    let temp = list_to_do;
    list_to_do = list_to_do.next;

    temp.next = reversed;
    reversed = temp;
  }

  return reversed;
}
