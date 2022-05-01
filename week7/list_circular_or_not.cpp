int isCircular(Node* head) {
  Node *slow = head, *fast = head;
  if (head == NULL || head->next == NULL)
    return 1;
  slow = slow->next;
  fast = fast->next->next;
  while (fast && fast->next) {
    if (slow == fast) {
      break;
    }
    slow = slow->next;
    fast = fast->next->next;
  }
  if(fast == slow){
    slow = head;
    if(slow == fast) {
      while(fast->next != slow) fast = fast->next;
    }
    else {
      while (slow->next != fast->next) {
        slow = slow->next;
        fast = fast->next;
      }
    }
    if(fast->next == head){
      return 1;
    }
  } 
  return 0;
}
