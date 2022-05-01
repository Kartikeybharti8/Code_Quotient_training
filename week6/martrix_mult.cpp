#include<iostream>
#include<cstdio>
#include<cmath>
// Include headers as needed
using namespace std;
int main()
{int t,r1,r2, c1,c2, i, j,sum,k;
    cin>>t;
    while(t--)
    {
  	 cin>>r1>>c1;
  	 int a[r1][c1];
  	 for(i = 0; i < r1; i++)
      for(j = 0; j < c1; j++)
    	  cin>>a[i][j];
     cin>>r2>>c2;
  	 int b[r2][c2];
  	 for(i = 0; i < r2; i++)
      for(j = 0; j < c2; j++)
    	  cin>>b[i][j];
     int c[r1][c2];
     for(i = 0; i < r1; i++)
      for(j = 0; j < c2; j++)
      {sum=0;
    	 for(k = 0; k<r2 ;k++){
           sum+=a[i][k]*b[k][j];}
       c[i][j]=sum;
      }
	for(i = 0; i < r1; i++)
      {for(j = 0; j < c2; j++)
    	  cout<<c[i][j]<<" ";
      cout<<endl;}
    }
    return 0;
}
