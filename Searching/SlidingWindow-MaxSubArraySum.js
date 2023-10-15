function maxSubarraySum(array, windowSize) {
    if(array.length === 0 || array.length < windowSize) return null;

    let max= 0;
    for(let i = 0 ;i<windowSize;i++){
        max += array[i];
    }
    let value = max;
    for(let i= windowSize; i<array.length; i++){
        value =value - array[i-windowSize] + array[i];
        max = Math.max(max,value);
    }

    return max;
}
