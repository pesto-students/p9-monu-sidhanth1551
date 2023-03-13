function createIncrement() {
     let count = 0; 
     function increment() 
     {
         count =count+1; 
     }
     let message = `Count is ${count}`; 
     function log() {
         console.log(message);
     } 
     return [increment, log];
 }
             
 const [increment, log] = createIncrement(); 
   increment();
   increment();
   increment();
   log();

   // Here in line number 5 when we are trying to increment count. we are reassinging value 1 (new address) to count variable.
   // But if we see line number 7 the message variable still contains old reference address, It is still pointing to zero value address
   //We can see value 3 only when line no:7 gets inside function log(), So that the new count variable address get pointed to message variable all the time.