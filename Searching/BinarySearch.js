function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length;
    while(left<=right){

            let middle = parseInt((left+right)/2);
        if(arr[middle] == value){
            return middle;
        }
        else if(value > arr[middle]){
            left = middle+1;
        }
        else if(value < arr[middle]){
            right = middle-1;
        }
        else{
            break;
        }
    }
    return -1;
}
