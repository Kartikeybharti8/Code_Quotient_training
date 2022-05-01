function reverseString(str) {
    // Write your code here
  var s="";
  for(var a=str.length-1 ; a>=0 ; a--)
    {
      s+=str[a];
    }
  str= s;
  return str;
}
