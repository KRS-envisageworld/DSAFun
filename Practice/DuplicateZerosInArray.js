function DuplicateZeros(arr) {
    for(var i = 0 ; i<arr.length;i++){
        
        if(arr[i] == 0){
            arr.pop();
            arr.splice(i,0,0);
           i++;
        }
        
    }
    return arr;
};


DuplicateZeros([1,0,2,3,0,4,5,0])
