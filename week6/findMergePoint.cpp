/* struct Node
{
    int data;
    Node* next;
};
Above structure is used to define the linked list, You have to complete the below functions only */
Node* findMergePoint(Node* head1,Node* head2) 
{
  if(head1 == NULL || head2 == NULL)
    return NULL;
  Node *h1 = new Node(),*h2 = new Node();
  h1=head1;
  h2=head2;
  int d,l1 = 1,l2=1;
  while(h1->next)
  {
    l1++; h1 = h1->next;
  }
  while(h2->next)
  {
    l2++; h2 = h2->next;
  }
  h1=head1; h2=head2;
  if(l1>l2)
  {
    d = l1-l2;
    while(d--)
      h1 = h1->next;
  }
  else
  {
    d = l2-l1;
    while(d--)
      h2 = h2->next;
  }
  while(h1->next && h2->next)
  {
    if(h1 == h2)
      return h1;
    h1 = h1->next;
    h2 = h2->next;
  }
  if(h1 == h2)
    return h1;
  return NULL;
}
