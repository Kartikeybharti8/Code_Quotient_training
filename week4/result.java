class Result {
  public static int pickMGifts(int m, List<Integer> arr) {
    Collections.sort(arr);
    int size = arr.size();
    int i=0;
    int ans=Integer.MAX_VALUE;
    while(i+m<size){
      ans = Math.min(ans,arr.get(i+m-1)-arr.get(i));
      i++;
    }
    return ans;
  }
}
