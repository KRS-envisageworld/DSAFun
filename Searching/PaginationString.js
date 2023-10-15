function GetPaginationString(arr){
    function GetLastPage(input,i){
    if(input.length <= 0){return "";}
    if(input.length <= i+1 || input[i+1] != input[i] +1){
       return input[i]+"--"+i;
    }
   return GetLastPage(input,i+1);
}
    var j = 0;
    var generatedStr = "";
    while(j < arr.length){
        var startingValue = arr[j];
        var endValueString = GetLastPage(arr,j);
        if(endValueString != ""){
            j = endValueString.split("--")[1];
            endValueString = endValueString.split("--")[0];
        }
        generatedStr += startingValue +"-" + endValueString +",";
        j++;
    }
return generatedStr;
}

GetPaginationString( [1,2,3,4,6,5,7,8,9,10]);