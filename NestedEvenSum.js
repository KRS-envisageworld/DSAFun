function nestedEvenSum (obj) {
 
let evennSum = 0;
  Object.keys(obj).forEach((key)=>{
     if(typeof(obj[key]) == "object"){
      evennSum += nestedEvenSum(obj[key])
     }

     if(typeof(obj[key]) == "number" && obj[key] %2 == 0){
      evennSum  += obj[key];
     }
 })
 return evennSum;
}
