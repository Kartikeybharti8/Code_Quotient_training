int rotationCount(int arr[], int size) {
  // Write your code here
  int min_index=0;
  for(int i =0;i<size;i++)
  {
    if(arr[i]<arr[min_index])
      min_index=i;
	}
  return min_index;
}
