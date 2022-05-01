void printNextGreaterElement(int arr[],int n){
  // Write your code here
   int i, j;
   for (i = 0; i < n; i++)
   {
       for (j = i+1; j < n; j++)
       {
           if (arr[j] > arr[i])
           {
               cout << arr[j] << " ";
               break;
           }
       }
       if (j == n || i == n-1)
           cout << "-1" << " ";
   }
}
