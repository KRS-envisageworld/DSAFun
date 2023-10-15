
function fib(target){
   let current = 0;
   let previous = 1;
   let counter =0;
      function findFib(target,current,previous, counter){
          let sum = current+previous;
         counter++;
          if(target == counter)
              return sum;
          
          previous = current;
          current = sum;
      
          counter = findFib(target,current,previous,counter);
          return counter;
          
      }
   return findFib(target,current,previous,counter);
   }
