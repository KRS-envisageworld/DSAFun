class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var node = new Node(val);
    if (this.root == null) return (this.root = node);

    var currentNode = this.root;

    while (true) {
      if (val == currentNode.val) return undefined;
      if (currentNode.value < val) {
        if (currentNode.right == null) {
          currentNode.right = node;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left == null) {
          currentNode.left = node;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }

  contains(val) {
    if (this.root == null) return false;

    var currentNode = this.root;
    while (currentNode != null) {
      if (currentNode.value == val) {
        return true;
      }
      if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  find(val) {
    if (this.root == null) return undefined;

    var currentNode = this.root;
    while (currentNode != null) {
      if (currentNode.value == val) {
        return currentNode;
      }
      if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return undefined;
  }

  BFS() {
    var queue = [];
    var visited = [];
    var deQueued = this.root;
    queue.push(deQueued);
    while (queue.length) {
      deQueued = queue.shift();
      visited.push(deQueued.value);
      if (deQueued.left) queue.push(deQueued.left);
      if (deQueued.right) queue.push(deQueued.right);
    }
    return visited;
  }
}

var testTree = new BST();

testTree.insert(41);
testTree.insert(30);
testTree.insert(42);
testTree.insert(17);
testTree.insert(31);
testTree.insert(40);
testTree.insert(100);
testTree.insert(18);

console.log(testTree);
console.log("contains 10\t:" + testTree.contains(10));
console.log("contains 41\t:" + testTree.contains(41));
console.log("contains 17\t:" + testTree.contains(17));
console.log("contains 23\t:" + testTree.contains(23));
console.log("contains 18\t:" + testTree.contains(18));
testTree.root = null;
console.log("contains 18\t:" + testTree.contains(18));

testTree.insert(41);
testTree.insert(30);
testTree.insert(42);
testTree.insert(17);
testTree.insert(31);
testTree.insert(40);
testTree.insert(100);
testTree.insert(18);

console.log("find 10\t:" + testTree.find(10));
console.log("find 41\t:" + testTree.find(41));
console.log("find 17\t:" + testTree.find(17));
console.log("find 23\t:" + testTree.find(23));
console.log("find 18\t:" + testTree.find(18));
testTree.root = null;
console.log("find 18\t:" + testTree.find(18));

testTree.insert(41);
testTree.insert(30);
testTree.insert(42);
testTree.insert(17);
testTree.insert(31);
testTree.insert(40);
testTree.insert(100);
testTree.insert(18);
console.log("BSF \t:" + testTree.BFS());
