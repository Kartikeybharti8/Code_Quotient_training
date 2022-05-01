int countVowelSubstr(char* str){
  int count = 0, n=strlen(str);
  for(int i=0; i<n; i++)
  {
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' ||str[i]=='o' ||str[i]=='u' ||str[i]=='A' ||str[i]=='E' ||str[i]=='I' ||str[i]=='O' ||str[i]=='U')
    {
      count = (count + n-i % 10007) %10007;
    }   
  }
  return count;
}
