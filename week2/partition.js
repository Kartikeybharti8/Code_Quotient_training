// Modify the code
function partitionArray(arr,x){
  let i, j, temp;
  i = 0;
  j = arr.length-1;
  while (i < j)
  {
    while (arr[i] <=x)
    {
     if(i>= j) break;
      i++;
    }
    while (arr[j] > x)
    {
       if(i>= j) break;
        j--;
    }
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}
