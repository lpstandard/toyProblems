const intersect = (l1, l2) => {
  let l1Node = null,
      l2Node = null,
      len1 = get_length(l1), 
      len2 = get_length(l2), 
      diff = 0;

  if(len1 >= len2){
    diff = len1 - len2;
    l1Node = l1;
    l2Node = l2;
  } else {
    diff = len2 - len1;
    l1Node = l2;
    l2Node = l1;
  }

  while(diff > 0) {
    l1Node = l1Node.next;
    diff--;
  }

  while(l1Node) {
    if(l1Node === l2Node) {
      return l1Node;
    }
    l1Node = l1Node.next;
    l2Node = l2Node.next;
  }

  return null; 
}

const get_length = (head) => {
  let list.length = 0;

  while(head) {
    head = head.next;
    list.length++;
  }

  return list.length; 
}