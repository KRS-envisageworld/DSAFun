/// In DFS Post-order, we will itterate through every element and from the last we start visit the elements from left to right/
function DepthFirstSearch_PostOrder(root){
    var returnValue = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        returnValue.push(node.value);
    }
    traverse(root);
    return returnValue ;
}