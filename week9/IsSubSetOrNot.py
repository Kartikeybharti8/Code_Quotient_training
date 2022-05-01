# Return true/1 if the array is subset of the given array
def isSubsetOrNot(a,a_size,b,b_size):
  if a == b:
    return 1
  for i in b:
    if i in a:
      return 1
    else:
      return 0
