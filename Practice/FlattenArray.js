function flatten(arr){
    let flattenArray = [];
function createArray(arrList){
    if(arrList.length === 0){
        return;
    }

    if(Array.isArray(arrList[0]))
    {
        createArray(arrList[0]);
    }
    else{
        flattenArray.push(arrList[0]);
    }

    return createArray(arrList.slice(1));
}
    createArray(arr);
    return flattenArray;
}
