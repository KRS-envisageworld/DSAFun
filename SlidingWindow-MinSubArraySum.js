function minSubArrayLen(arr, target){
    console.log(arr,target);
    let windowSize = 1;
    let returnValue =0;
    while (windowSize < arr.length) {
    let tempMinimum = 0;
        for (let index = 0; index < windowSize; index++) {
            tempMinimum = tempMinimum + arr[index];
        }
        for (let index = windowSize; index < arr.length; index++) {
            tempMinimum = tempMinimum + arr[index] - arr[index- windowSize];
            if(tempMinimum >= target){
                returnValue = windowSize;
                break;
            }
        }
        if(returnValue > 0){
            break;
        }
        windowSize++;
    }
    return returnValue;
}
