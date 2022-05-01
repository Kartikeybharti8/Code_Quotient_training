function isprime(num){
   if (num <= 1)
      return 0;
   for (var i = 2; i <= num/2; i++){
      if (num % i == 0)
         { return 0; }
   }
   return 1; //if both failed then num is prime
}
function primeCount(end){
   var count=0;
   for(var i=2;i<=end;i++){
      if(isprime(i)==1)
         { count++; }
   }
   return count;
}
