function countUniqueValues(arr){
      let uniqueNumber = 1;

    if(arr.length == 0){
        return 0;
    }

    let po1 = 0;
    let po2 =1;
    while(po2 < arr.length){
        if(arr[po1] == arr[po2]){
            po2++;
        }
        else{
            po1 = po2++;
            uniqueNumber++;
        }
    }
    return uniqueNumber;
}
