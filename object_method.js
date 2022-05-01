/* ladder object has already been declared
const ladder = {
	steps: 0
};
*/
/* Type your javascript code below */
ladder.setSteps= function(n){
      ladder.steps=n;
}
ladder.getSteps= function(){
     return ladder.steps;
}
ladder.stepUp = function(){
     ladder.steps+=1;
}
ladder.stepDown = function(){
     ladder.steps-=1;
}
