void counterDiagonal(int mat[N][N],int n)
{
	for (int col = 0; col < n; col++)
    {
		int i = 0, j = col;
		while (j >= 0 && i < n) {
			cout << mat[i][j] << " ";
			j--;
			i++;
		}
	}
	for (int row = 1; row < n; row++)
    {
		int i = row, j = n - 1;
		while (i < n && j >= 0) {
			cout << mat[i][j] << " ";
			j--;
			i++;
		}
	}
}
