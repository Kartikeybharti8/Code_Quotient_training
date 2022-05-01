int specialIndex(int arr[], int n) {
  // Write your code here
  int sum = 0;
  int leftsum = 0;
  for(int i=0;i<n;i++){
    sum += arr[i];
  }
  for(int i=0;i<n;i++)
  {
    sum -= arr[i];
    if(leftsum==sum)
      return i;
    leftsum += arr[i];
  }
  return -1;
}
