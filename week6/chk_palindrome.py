def checkPalindrome(head):
    # Temp pointer
    temp = head
    # Declare a stack
    stack = []
    ispal = 1
    # Push all elements of the list
    # to the stack
    while temp != None:
        stack.append(temp.data)
        # Move ahead
        temp = temp.next
    # Iterate in the list again and
    # check by popping from the stack
    while head != None:
        # Get the top most element
        i = stack.pop()
        # Check if data is not
        # same as popped element
        if head.data == i:
            ispal = 1
        else:
            ispal = 0
            break
        # Move ahead
        head = head.next
    return ispal
