def solveQueries(arr, queries):
  rs_arr =sorted(arr,reverse=True)
  sum = 0
  for i in queries:
    sum = sum + rs_arr[i-1]
  return sum
