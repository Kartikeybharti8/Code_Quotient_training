/* struct Node
{
    int data;
    Node* next;
};
Above structure is used to define the linked list, You have to complete the below functions only */
int findMiddle(Node* head) 
{
  Node *mid = new Node();
  Node *last = new Node();
  if(head == NULL)
    return -1;
  mid=head;
  last=head;
  while(last->next!=NULL)
  {
    if((last->next)->next == NULL)
    {
      return (mid->next)->data;
    }
    last = (last->next)->next;
    mid = mid->next;
  }
  return mid->data;
}
int findNLast(Node* head, int n)
{
  if(head == NULL)
    return -1;
  int cnt=1;
  Node *l = new Node(), *r = new Node();
  l=head;r=head;
  while(cnt<n)
  {
    if(r->next == NULL)
      return r->data;
    r = r->next;
    cnt++;
  }
  while(r->next)
  {
    r = r->next;
    l = l->next;
  }
  return l->data;
}
