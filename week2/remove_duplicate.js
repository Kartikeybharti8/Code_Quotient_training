// Return the updated array
function removeDuplicates(arr1,size){
  // Write your code here
 if(size==0||size==1){
   return arr1;
 }
  var j=0;
  var arr2=[];
  for(var i=0; i<size ;i++){
    if(arr1[i]!=arr1[i+1]){
      arr2[j]=arr1[i];
      j++;
    }
  }
  //arr2[j++]=arr1[size-1];
  return arr2;
}
