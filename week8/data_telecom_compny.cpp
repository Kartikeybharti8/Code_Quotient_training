int collectData(int arr[], int n)
{
    stack<int> s;
    int res[n], sum=0;
    for (int i = n - 1; i >= 0; i--) {
        if (!s.empty()) {
            while (!s.empty() && s.top() <= arr[i]) {
                s.pop();
            }
        }
        res[i] = s.empty() ? -1 : s.top();
        s.push(arr[i]);
    }
    for (int i = 0; i < n; i++)
        sum += res[i];
  return sum;
}
