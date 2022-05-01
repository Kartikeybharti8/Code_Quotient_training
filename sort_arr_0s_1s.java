import java.util.Scanner;
class Result
{
  static void sorting012Array(int a[], int n)
  {
    int i=0, j=0, k=n-1;
    while (j <= k)
    {
      if (a[j] == 0)
      {
        int temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j++;
      }
      else if (a[j] == 1)
      {
        j++;
      }
      else if (a[j] == 2)
      {
        int temp = a[k];
        a[k] = a[j];
        a[j] = temp;
        k--;
      }
    }
  }
}
