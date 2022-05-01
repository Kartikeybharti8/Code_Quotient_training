// Return an array containing the leaders
function findTheLeaders(arr1, N ){
  // Write your code here
  var arr2=[];
  for(var i=0; i<N ;i++){
   var temp=arr1[i];
    // console.log(" new temp", temp,"\n")
    for(var j=i+1; j<N+1 ;j++){
        // console.log("5")
          if(temp<arr1[j]){
            //   console.log(arr1[j]," temp < arr1 break")
              break;
          }
          else{
            if(temp>=arr1[j]){
            //   console.log(arr1[j]," temp > arr1 continue")
              continue;
                } 
            else if(arr1[j]==undefined){
                 arr2.push(temp);
                //  console.log(arr1[j],"push",temp)
                }
            }
        }
    }
    return arr2;
}
