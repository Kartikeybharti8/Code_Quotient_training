def areBracketsBalanced(expr):
	stack = []
	# Traversing the Expression
	for c in expr:
		if c in ["(", "{", "["]:
			# Push the element in the stack
			stack.append(c)
		elif c in [")","}","]"]:
			if not stack:
				return False
			current_c = stack.pop()
			if current_c == '(':
				if c!= ")":
					return False
			if current_c == '{':
				if c!= "}":
					return False
			if current_c == '[':
				if c!= "]":
					return False
	if stack:
		return False
	return True
