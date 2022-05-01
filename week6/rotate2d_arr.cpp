#include <bits/stdc++.h> 
using namespace std;
int main()
{   
  int t;
  cin >> t;
  while(t--)
  {
    int n;
    cin>>n;
    int arr[50][50];
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            cin>>arr[i][j];
        }
    }
    for (int i=0;i<n/2;i++) 
    { 
      for (int j=i;j<n-i-1;j++) 
      { 
          // Swapping elements after each iteration in Clockwise direction
              int temp=arr[i][j]; 
              arr[i][j]=arr[n-1-j][i]; 
              arr[n-1-j][i]=arr[n-1-i][n-1-j]; 
              arr[n-1-i][n-1-j]=arr[j][n-1-i]; 
              arr[j][n-1-i]=temp; 
      } 
    }
    // Printing matrix elements after rotation
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            if(j == n-1)
              cout<<arr[i][j];
          	else
          	  cout<<arr[i][j]<<" ";
        }
        cout<<"\n";
    }
    cout<<"\n";
  }
  return 0;
}
