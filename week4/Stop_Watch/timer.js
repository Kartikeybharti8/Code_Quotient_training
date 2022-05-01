var hourNode =document.getElementById("hour")
var minNode = document.getElementById("min");
var secNode = document.getElementById("sec");
var wiserNode = document.getElementById("wiser");
 
var timerValue = 0;
var count = 0;

var control = false;

wiserNode.addEventListener("click",function(){
 if(control)
 {
   //stop the timer
   clearInterval(control);
   wiserNode.innerHTML = "Start";
   control = false;

 }
 else
 {
   //start the timer
   wiserNode.innerHTML = "Pause";

   control = setInterval(function (){
     
     timerValue++;
     hourNode.innerHTML = parseInt(timerValue/(60*60));
     secNode.innerHTML = timerValue%60;
     
     if(parseInt(secNode.innerHTML)==0){
       count+=1;
     }
     if(count==60){
       count=0;
     }
     minNode.innerHTML = count;
     

   },1000)
 }

}) 
