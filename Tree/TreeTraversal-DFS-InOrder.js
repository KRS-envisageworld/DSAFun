/// In DFS InOrder, we will itterate through every element and add to the visit list orderly.
function DepthFirstSearch_InOrder(root){
    var returnValue = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        returnValue.push(node.value);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    return returnValue ;
}