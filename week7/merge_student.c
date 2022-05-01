int* mergeStudents(int n, int marks1[], int m, int marks2[]) {
  // Write your code here
  int i=0,j=0,k=0;
  int *ans=malloc((n+m)*(sizeof(int)));
 while(i<n && j<m)
  {
    if(marks1[i]>=marks2[j])
      ans[k++]=marks1[i++];
    else
      ans[k++]=marks2[j++];
  }
  while(i<n)
   ans[k++]=marks1[i++];
  while(j<m)
    ans[k++]=marks2[j++];
  return ans;
}
