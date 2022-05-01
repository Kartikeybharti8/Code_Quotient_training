def evalPostfix(stack,exp):
    stack = CQStack()
    for i in exp:
        if i.isdigit(): 
            stack.push(i) 
        else: 
            v1 = stack.pop() 
            v2 = stack.pop()
            if i=='^':
              i = "**"
            stack.push(str(int(eval(v2 + i + v1))))
    return int(stack.pop())
