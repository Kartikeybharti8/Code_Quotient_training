int maxStudents(int arr[], int n){
   sort(arr, arr+n);
   int count = 1, ans = 1;
  if(n==0){
    return 0;
  }
   for (int i=1; i<n; i++)
   {   
       if (arr[i] == arr[i-1] + 1)
           count++;
       else if (arr[i] != arr[i-1])
           count = 1;
       if (count > ans)
           ans = count;
   }
   return ans;
}
