import re
from itertools import groupby
def compressString(string):
    return re.sub(r'(?<![0-9])[1](?![0-9])', '',''.join('%s%s' % (char, sum(1 for _ in group)) for char, group in groupby(string)))
