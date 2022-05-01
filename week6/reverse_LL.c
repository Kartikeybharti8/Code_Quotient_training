struct Node* reverseList(struct Node* head) {
  if(head == NULL || head->next == NULL)
  {
    return head;
  }
  struct Node* prev=NULL;
  struct Node* curr=head;
  struct Node* forward=NULL;
  while(curr!=NULL)
  {
    forward= curr->next;
    curr->next = prev;
    prev=curr;
    curr=forward;
  }
  return prev;
}
