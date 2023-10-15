function isSubsequence(mainStr, targetStr) {
    var i = 0;
    var j = 0;
    var mainStrLen = mainStr.length;
    while(j<targetStr.length && i < mainStrLen){
        if(targetStr[j] == mainStr[i]){
            i++;
            j++;
        }
        else{
            j++;
        }
    }
    if(i ==mainStrLen){
        return true;
    }
  return false;
}
