class Node {
    constructor(val,priority){
        this.value = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
      this.values = [];
    }
  
    Insert(val,priority) {
        let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.Enqueue();
    }
  
    Enqueue() {
      var lastIndex = this.values.length - 1;
      var element = this.values[lastIndex];
      while (lastIndex > 0) {
        var parentIndex = Math.floor((lastIndex - 1) / 2);
        var parentElement = this.values[parentIndex];
        if (element.priority >= parentElement.priority) break;
  
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
    ExtractMin() {
      let min = this.values[0];
      let endValue = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = endValue;
        this.Dequeue();
      }
      return min;
    }
  
    Dequeue() {
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
          if (leftChildElement !== null && leftChildElement.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
  
        if (rightChildIdx < originalArrayLen) {
          rightChildElement = this.values[rightChildIdx];
          if (
            (rightChildElement !== null && swap == null && rightChildElement.priority < element.priority) ||
            (swap != null && rightChildElement.priority < leftChildElement.priority)
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
  
  var priorityQueue = new PriorityQueue();
  priorityQueue.Insert("Tea",2);
  priorityQueue.Insert("Ligher",5);
  priorityQueue.Insert("Sugar",3);
  priorityQueue.Insert("Water",1);
  priorityQueue.Insert("Gas",4);
  priorityQueue.Insert("Time",0);
  priorityQueue.Insert("Cup",6);
  
  console.log(priorityQueue.ExtractMin());
  console.log(priorityQueue.ExtractMin());
  console.log(priorityQueue.ExtractMin());
  console.log(priorityQueue.ExtractMin());
  console.log(priorityQueue.ExtractMin());
  console.log(priorityQueue.ExtractMin());
  console.log(priorityQueue.ExtractMin());
  console.log(priorityQueue.ExtractMin());
  console.log(priorityQueue.ExtractMin());
  console.log(priorityQueue.ExtractMin());

  
  console.log(priorityQueue.values);
  
