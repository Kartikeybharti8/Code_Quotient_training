# Return the number of pairs with sum
def getFistOccurrence(A,left,right, key):
    while( left <= right ):
        mid = (left + (right-left)//2)
        if( A[mid] == key ):
            if (mid-1 >= left and A[mid-1] == key):
                right = mid-1
            else:
                return mid
        elif( A[mid] < key ):
            left = mid + 1
        else:
            right = mid - 1
    return -1
def getLastOccurrence(A,left,right,key):
    while( left <= right ):
        mid = (left + (right-left)//2)
        if( A[mid] == key ):
            if (mid+1 <= right and A[mid+1] == key):
                left = mid+1
            else:
                return mid
        elif( A[mid] < key ):
            left = mid + 1
        else:
            right = mid - 1
    return 
def getCount(arr,n, key,l,r):
    first = getFistOccurrence(arr, l, r, key)
    if (first == -1):
        return 0
    last = getLastOccurrence(arr, l, r, key)
    return last-first+1
def getPairsCount(arr,Sum):
    count = 0;
    n=len(arr)
    for i in range(n):
       count += getCount(arr, n, Sum - arr[i], i+1, n-1);
    return count;
