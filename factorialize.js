function factorialize(num) {
  //Type your code here
  var fa=1;
  if(num<0){
    return undefined;
  }
  while( num!=0)
    { 
     fa=num*fa; 
     num--;
    }
  num = fa
  return num;
}
// console.log(factorialize(0))
