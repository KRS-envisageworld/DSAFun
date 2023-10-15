// In MaxBinaryHeap parent should be greater than child. 
// Always fill left node first and then fill right,
// parent's left child is 2n+1
// parent's right child is 2n+2
// First push element to the array and then bubble up it to the correct node
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  Insert(val) {
    this.values.push(val);
    this.BubbleUp();
  }

  BubbleUp() {
    var lastIndex = this.values.length - 1;
    var element = this.values[lastIndex];
    while (lastIndex > 0) {
      var parentIndex = Math.floor((lastIndex - 1) / 2);
      var parentElement = this.values[parentIndex];
      if (element <= parentElement) break;

      this.values[lastIndex] = parentElement;
      this.values[parentIndex] = element;
      lastIndex = parentIndex;
    }
    return this.values;
  }
  swap(arr, source, destination) {
    var temp = arr[source];
    arr[source] = arr[destination];
    arr[destination] = temp;
  }
  ExtractMax() {
    let max = this.values[0];
    let endValue = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = endValue;
      this.BubblingDown();
    }
    return max;
  }

  BubblingDown() {
    let idx = 0;
    const element = this.values[idx];
    const originalArrayLen = this.values.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = leftChildIdx + 1;
      let leftChildElement, rightChildElement;
      var swap = null;
      if (leftChildIdx < originalArrayLen) {
        leftChildElement = this.values[leftChildIdx];
        if (leftChildElement !== null && leftChildElement > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < originalArrayLen) {
        rightChildElement = this.values[rightChildIdx];
        if (
          (rightChildElement !== null &&
            swap == null &&
            rightChildElement > element) ||
          (swap != null && rightChildElement > leftChildElement)
        ) {
          swap = rightChildIdx;
        } 
      }
 
      if (swap == null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

var maxHeap = new MaxBinaryHeap();
maxHeap.Insert(55);
maxHeap.Insert(39);
maxHeap.Insert(41);
maxHeap.Insert(18);
maxHeap.Insert(27);
maxHeap.Insert(12);
maxHeap.Insert(33);

console.log(maxHeap.ExtractMax());
console.log(maxHeap.ExtractMax());
console.log(maxHeap.ExtractMax());
console.log(maxHeap.ExtractMax());
console.log(maxHeap.ExtractMax());
console.log(maxHeap.ExtractMax());
console.log(maxHeap.ExtractMax());
console.log(maxHeap.ExtractMax());
console.log(maxHeap.ExtractMax());
console.log(maxHeap.ExtractMax());
console.log(maxHeap.values);
