function fetchPivot(arr, start = 0, end= arr.length-1){
    function swap(arr,i,j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let pivot = arr[start];
    let swapIndex =start;

    for(let i = start+1; i <= end; i++){
        if(arr[i] < pivot){
            swapIndex++;
            swap(arr,swapIndex,i);
        }
    }
    swap(arr,start,swapIndex);
    return swapIndex;
}

function quickSort(arr, left=0, right= arr.length-1){
    if(left< right){
        var pivotIndex = fetchPivot(arr,left,right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
        
    }
    return arr;
}

quickSort([5,4,1,8,9,6,3,2,7])
