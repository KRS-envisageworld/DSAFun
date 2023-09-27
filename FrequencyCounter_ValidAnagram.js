function validAnagram(str1, str2){
  if(str1.length != str2.length){
      return false;
  }
  let firstInput ={};
  let secondInput = {};
  for(let char of str1){
      firstInput[char] = ++firstInput[char]||1;
  }
  for(let char of str2){
      secondInput[char] = ++secondInput[char]||1;
  }
  for(let item in firstInput){
      if(!(item in secondInput)){
          return false;
      }
      if(firstInput[item] !=  secondInput[item] ){
          return false;
      }
  }
  return true;
}
