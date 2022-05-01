long first(int arr[], int n, int k)
{
  	int i = 0;
  	int j = n-1;
  	int mid = 0;
  	while(i<=j)
    {
      	mid = (i+j)/2;
  		if(arr[mid] == k)
        {
          	if((mid-1 >= i) && (arr[mid-1] == k))
              			j = mid - 1; 
          	else
              			return mid;
        }
      	else if(k < arr[mid])
        {
          	  j = mid - 1;
        }
      	else
        {
          		i = mid + 1;
        }
    }
  				return -0;			
 }
long last(int arr[], int n, int k)
{
  	int i = 0;
  	int j = n-1;
  	int mid = 0;
  	while(i<=j)
    {
      	mid = (i+j)/2;
  		if(arr[mid] == k)
        {
          	if((mid+1<= j) && (arr[mid+1] == k))
              			i = mid + 1; 
          	else
              			return mid;
        }
      	else if(k < arr[mid])
        {
          	  j = mid - 1;
        }
      	else
        {
          		i = mid + 1;
        }
    }
  				return -1;			
 }
long solveChallenges(int n, int arr[], int K, int challenges[])
{
 	 int i;
  	long l,f,sum = 0;
  	for(i=0;i<K;i++)
    {
      	f = first(arr, n,challenges[i]);
       	l = last(arr, n,challenges[i]);
  sum+=(l-f)+1;
    }
    	return sum;
}
