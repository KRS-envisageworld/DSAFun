// In MaxBinaryHeap parent should be greater than child. 
// Always fill left node first and then fill right,
// parent's left child is 2n+1
// parent's right child is 2n+2
// First push element to the array and then bubble up it to the correct node

class MaxBinaryHeapMax {
  constructor() {
    this.values = [44,11,22,10,9,18,19];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp(){
    var index = this.values.length - 1;
    var element = this.values[index];
    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2);
      var parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

}

let heap = new MaxBinaryHeapMax();
heap.insert(45);
console.log(heap.values);

// [44,11,22,10,9,18,19]
//  0   1  2  3 4  5  6  