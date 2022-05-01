class Result
{
  static int getPairsCount(int arr[], int n,int k)
  {
    int count = 0;
    Arrays.sort(arr); 
    int l = 0;
    int r = 0;
    while(r < n)
    {
        if(arr[r] - arr[l] == k)
        {
            count++;
            l++;
            r++;
        }
        else if(arr[r] - arr[l] > k)
            l++;
        else 
            r++;
    }
    return count;
}
}
