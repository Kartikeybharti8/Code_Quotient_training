int lastIndekofK(int arr[], int n, int k) {
  // Write Your Code Here
   int i=0,j=n-1;
  while(i<=j){
    int m=i+(j-i)/2;
    if(arr[m]<k)
      i=m+1;
    else if(arr[m]>k)
      j=m-1;
    else{
      if((m+1)<=j && arr[m+1]==k)
        i=m+1;
      else
        return m;
    }
  }
  return -1;
}
