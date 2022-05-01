#define ULL unsigned long long
ULL sqrt(long n) {
 // Write your code here
  ULL left = 1; ULL right = n;
  ULL res = 1;
  while (left <= right){
    ULL mid = (left + right) / 2;
    ULL sqr = mid * mid;
         if (sqr == n) {res = mid; break; }
    else if (sqr > n){ right = mid - 1; }
    else if (sqr < n){ res= mid; left =mid + 1;}
  }      
  return res;
}
