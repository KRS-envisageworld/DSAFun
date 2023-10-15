class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length <= 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  shift() {
    if (this.length == 0) return undefined;
    let removedNode;
    if (this.length == 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removedNode = this.head;
      this.head = removedNode.next;
      this.head.prev = null;
    }
    this.length--;
    return removedNode;
  }

  get(index) {
    if (this.length == 0 || index > this.length - 1 || index < 0) return null;
    if (index == this.length - 1) return this.tail;
    if (index == 0) return this.head;
    let mid = Math.floor(this.length / 2);
    let currentNode = {};
    let counter = 0;
    if (index > mid) {
      counter = this.length;
      currentNode = this.tail;
      while (counter > index) {
        currentNode = currentNode.prev;
        counter--;
      }
    } else {
      currentNode = this.head;
      while (counter < index) {
        currentNode = currentNode.next;
        counter++;
      }
    }
    return currentNode;
  }

  set(index, val) {
    let foundedNode = this.get(index);
    if (foundedNode) {
      foundedNode.val = val;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index < 0 || index > this.length || this.length == 0) return undefined;
    var tobeRemoved = null;
    if (this.length == 1) {
      tobeRemoved = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      tobeRemoved = this.get(index);
      var prev = tobeRemoved.prev;
      var next = tobeRemoved.next;

      prev.next = next;
      next.prev = prev;
      tobeRemoved.prev = null;
      tobeRemoved.next = null;
      this.length--;
    }
    return tobeRemoved;
  }

  pop() {
    if (this.length == 0) return undefined;
    let removedNode = null;
    if (this.length == 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      removedNode = this.tail;
      this.tail.prev.next = null;
      this.tail.prev = null;
      this.tail = null;
      this.length--;
    }
    return removedNode;
  }

  insert(index, val) {
    if (this.length == 0 || index < 0 || index > this.length) return false;
    let newNode = new Node(val);
    var targetNode = this.get(index);
    newNode.prev = targetNode;
    newNode.next = targetNode.next;
    targetNode.next.prev = newNode;
    targetNode.next = newNode;
    this.length++;
    return true;
  }

  reverse() {
    if (this.length === 0) return false;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prevNode = null;
    let newNode;
    let currentNode = this.tail;
    for (var i = 1; i <= this.length; i++) {
      newNode = currentNode.next;
      currentNode.next = prevNode;
      currentNode.prev = newNode;
      //newNode.prev = currentNode;

      prevNode = currentNode;
      currentNode = newNode;
    }
    return this;
  }
}
