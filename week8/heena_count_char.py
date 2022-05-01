def countFrequency(string):
  D={};
  for i in string:
    if i in D:
      D[i]+=1;
    else:
      D[i] = 1;
  for i in sorted (D.keys()) :
    print(i+str(D[i]),end=' ');
