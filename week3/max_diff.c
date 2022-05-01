int maxDifference(int arr[], int n)
{
    int maxDiff=-1;
    int minElem=arr[0];
  	for(int i=1;i<n;i++){
      if((arr[i]-minElem)>maxDiff){
        maxDiff=arr[i]-minElem;
      }
      if(minElem>arr[i]){
        minElem=arr[i];
      }
    }
  if(maxDiff==0)
  	return -1;
  else
    return maxDiff;
}
