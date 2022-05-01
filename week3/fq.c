int fq(int arr[],int n,int k){
  int l=0,r=n-1;
  while(l<=r){
    int mid=(l+r)/2;
    if(arr[mid]==k){
      if(mid-1>=0 && arr[mid-1]==k){
        r=mid-1;
      }
      else
        return mid;
    }
    else if(arr[mid]>k){
      r=mid-1;
    }
    else{
      l=mid+1;
    }
  }
  return -1;
}
long solveChallenges(int N, int arr[], int K, int challenges[]) {
  // Write your code here
  long s=0;
  for(int i=0;i<K;i++){
    s=s+fq(arr,N,challenges[i]);
  }
  return s;
}
