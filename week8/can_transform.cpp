int canTransformed(int a, int b, int c, int d)
{
	if(a == c && b == d)
      		return 1;
  	if(a > c || b > d)
      		return 0;
  	if(canTransformed(a+b, b, c, d) || canTransformed(a, a+b, c, d))
      		return 1;
  	else
      		return 0;
}
