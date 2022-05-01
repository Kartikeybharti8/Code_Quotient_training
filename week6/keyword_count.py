# Return the word count
def keyWordCount(str, word):
  a=str.split()
  c=0
  for i in a:
    if word == i:
      c=c+1
  return c
