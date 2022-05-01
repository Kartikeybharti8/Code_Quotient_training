import collections
def getMajorityElement(arr):
  c = collections.Counter(arr)
  for i in c:
    if(c[i] > len(arr)//2):
      return i
  return -1
