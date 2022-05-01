vector<int> reduceArray(vector<int> lengths) {
  // Write your code here
  vector<int> ans;
  int n = lengths.size();
  int remainingSticks = n;
    sort(lengths.begin(), lengths.end());
    for(int i=0; i<n; i++)
    {
        ans.push_back(remainingSticks);
        int count = 1;
        while (i+1 < n && lengths[i] == lengths[i+1])
        {
            count++;
            i++;
        }
        remainingSticks -= count;
    }
  return ans;
}
