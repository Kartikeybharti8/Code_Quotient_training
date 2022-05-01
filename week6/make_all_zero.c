void makeAllZero(int mat[ROWS][COLS], int n, int m){
   int i,j;
   int row[n], column[m];
   for (i=0; i<n; i++)
       row[i] = 1;
   for (i=0; i<m; i++)
       column[i] = 1;
   for (i=0; i<n; i++) {
       for (j=0; j<m; j++) {
           if (mat[i][j] == 0){
               row[i] = 0;
               column[j] = 0;
           }
       }
   }
   for (i=0; i<n; i++) {
       for (j=0; j<m; j++) {
           if (row[i] == 0 || column[j] == 0)
               mat[i][j] = 0;
       }
   }
}
