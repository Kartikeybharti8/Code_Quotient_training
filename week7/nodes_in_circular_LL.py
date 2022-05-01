# class Node:
#   def __init__(self, data):
#     self.data = data
#     self.next = None
#
# The above class is used to define a linked list node
# Return the number of nodes in linked list
def countNodes(head):
    if head==None:
        return 0
    # Next of head
    node = head.next
    i = 1
    # This loop would stop in both cases (1) If
    # Circular (2) Not circular
    while((node is not None) and (node is not head)):
        i = i + 1
        node = node.next
    return(i)
