def minReversal(expr):
    length = len(expr) 
    if (length % 2) :
        return -1
    stack = [] 
    for i in range(length):
        if (expr[i] ==']' and len(stack)): 
            if (stack[0] == '[') :
                stack.pop(0) 
            else:
                stack.insert(0, expr[i]) 
        else:
            stack.insert(0, expr[i]) 
    stack_length = len(stack) 
    a = 0
    while (len(stack) and stack[0] == '[') :
        stack.pop(0) 
        a += 1
    return (stack_length // 2 + a % 2)
