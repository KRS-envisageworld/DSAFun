function merge(arr1, arr2){
     let i = 0;
            var j = 0;
            var newArray =[];
            while (i < arr1.length && j < arr2.length)
            {
                if (arr1[i] < arr2[j])
                {
                    newArray.push(arr1[i]);
                    i++;
                }
                else
                {
                    newArray.push(arr2[j]);
                    j++;
                }
            }

            while (i < arr1.length)
            {
                newArray.push(arr1[i]);
                i++;
            }


            while (j < arr2.length)
            {
                newArray.push(arr2[j]);
                j++;
            }
            return newArray;
}

function GetSortedArray(arr){
    if(arr.length <= 1) {
        return [arr[0] * arr[0]];
    }
    var mid = Math.floor(arr.length /2 );
    var left = GetSortedArray(arr.slice(0,mid));
    var right = GetSortedArray(arr.slice(mid));

    return merge(left,right);

}

console.log(GetSortedArray([12,1,3,2,9]))
