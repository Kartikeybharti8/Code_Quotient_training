void deleteNode(struct Node* n1) 
{
    if(n1 == NULL)
      return;
    if(n1->next != NULL)
  	  {
       n1->data = (n1->next)->data;
       n1->next = (n1->next)->next;
      }
    else
      n1->next = NULL;
}
