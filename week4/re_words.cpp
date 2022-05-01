void revWordsString(string str){
  // Write your code here
  int a=0;
  int b=0;
  while(a<str.length()){
    while(b<str.length() && str[b]!=' '){
      b++;
    }
    reverse(str.begin()+a,str.begin()+b);
    a=b+1;
    b=a;
  }
  cout<<str;
}
