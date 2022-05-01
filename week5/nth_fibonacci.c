int nthFibonacciTerm(int n, int m){
    // Complete the given function
  int f0=0;
  int f1=1;
  int f2 = n;
  for(int i=2;i<=n;i++)
  {
		f2=(f0+f1)%m;
    	f0 = f1;
    	f1 = f2;
  }
  return f2;
}
