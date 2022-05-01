def maxPieces(k):
  # Write your code here
  a=0
  r=0
  c=0
  for i in range(1,k+1):
    for j in range(i,k+1):
      if (i+j)==k and i*j>=r*c:
        r=i
        c=j
  return r*c;
