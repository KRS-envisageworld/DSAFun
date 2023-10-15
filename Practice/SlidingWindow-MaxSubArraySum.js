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

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
