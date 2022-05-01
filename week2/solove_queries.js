def solveQueries(R, arr, queries):
  if R>N:
    R=R%N
  t=arr[:R]
  s=arr[R:]
  arr=s+t
  for i in queries:
    print(arr[i],end=" ")
