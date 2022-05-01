NO_OF_CHARS =256
def firstUniqueChar(string):
    count = getCharCountArray(string)
    index = -1
    k = 0
    for i in string:
        if count[ord(i)] == 1:
            index = k
            break
        k += 1
    return index
def getCharCountArray(string):
    count = [0] * NO_OF_CHARS
    for i in string:
        count[ord(i)]+= 1
    return count
