// Modify the array
function moveElements(a,size){
  // Write your code here
//   console.log(a)
var count=0;
var i=0
  while(count!=size){
      if(a[i]<0){
         // console.log(`${a[i]} <0 push last `)
          a.push(a[i]);
          a.splice(i,1);
          count++
      }else{
         // console.log(`${a[i]}>0 continue`)
          i++;
          count++
      }
  }
  return a;
}
