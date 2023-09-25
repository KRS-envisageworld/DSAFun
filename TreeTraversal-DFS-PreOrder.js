
/// In DFS Pre-order, we will first start from root and visit every elements from left to right.
function DepthFirstSearch_PreOrder(root){
    var returnValue = [];
    function traverse(node){
        returnValue.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    return returnValue ;
}