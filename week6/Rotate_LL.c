struct Node* rotateList(struct Node* head, int k)
{
	struct Node* current=head;
	struct Node* prev;
  if(head==NULL)
    return NULL;
  if(k==0)
  	return head;
  int size=1;
  while(current->next != NULL)
  {
    size++;
    current=current->next;
  }
  prev=current;
  current=head;
   if(size<k)
     return head;
  else
  {
  int i =0;
  while(i<k)
  {   
   prev->next=head;
   head=current->next;
   current->next=NULL;
   i++;
    current=head;
    prev=prev->next;
    }
  return head;
  }
}
