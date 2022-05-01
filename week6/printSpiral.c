void printSpiral(int a[ROWS][COLS], int m, int n)
{
   int top = 0, down = m-1, left = 0, right = n-1;
   int dir = 0;
   while (top <= down && left <= right){
       if (dir == 0){
           for (int i = left; i <= right; i++)
               printf("%d\n", a[top][i]);
           top++;
       }
       else if (dir == 1){ 
           for (int i = top; i <= down; i++)
               printf("%d\n", a[i][right]);
           right--;
       }
       else if (dir == 2){ 
           for (int i = right; i >= left; i--)
               printf("%d\n", a[down][i]);
           down--;
       }
       else if (dir == 3){ 
           for (int i = down; i >= top; i--)
               printf("%d\n", a[i][left]);
           left++;
       }
       dir = (dir+1)%4;
   }
}
