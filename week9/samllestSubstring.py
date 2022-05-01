from collections import defaultdict
import sys
def smallestSubstringPossible(str, pattern):
    def ifValid(i, j):
        for obj in j:
            if obj not in i or i[obj] < j[obj]:
                return False
        return True
    sr = defaultdict(int)
    tr = defaultdict(int)
    # Target consist pattern elements and 1
    # as key:value pair
    for a in pattern:
        tr[a] += 1
    # Minimum length for window	
    minL = sys.maxsize
    n = len(str)
    ans, j = '', 0
    for i in range(n):
        # Update source for valid source - target pair
        while j < n and (ifValid(sr, tr) == False):
            sr[str[j]] += 1
            j += 1
        # Checking validity of source-target pair
        if ifValid(sr, tr):
            if minL > j-i + 1:
                minL = j-i + 1
                ans = str[i:j]
        sr[str[i]] -= 1
    if len(ans) == 0:
        return -1
    else:
        return len(ans)
