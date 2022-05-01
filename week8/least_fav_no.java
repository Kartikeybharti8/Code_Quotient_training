import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
class Result {
  static int leastFavorite(int arr[], int n1) {
        Map<Integer,Integer> count = new HashMap<Integer,Integer>();
        int n = arr.length;
        for(int i = 0; i < n; i++)
        {
            int key = arr[i];
            if(count.containsKey(key))
            {
                int freq = count.get(key);
                freq++;
                count.put(key,freq);
            }
            else
                count.put(key,1);
        }
        int min_count = n+1, res = -1;
        for(Entry<Integer,Integer> val : count.entrySet())
        {
            if (min_count >= val.getValue())
            {
                res = val.getKey();
                min_count = val.getValue();
            }
        }
       return res;
  }
}
