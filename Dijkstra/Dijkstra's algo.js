class PriorityQueue {
    constructor() {
      this.values = [];
    }
  
    Enqueue(val, weight) {
      this.values.push({ val, weight });
      this.BubbleUp();
    }
  
    BubbleUp() {
      var elementIndex = this.values.length - 1;
      var nodeToShift = this.values[elementIndex];
      while (elementIndex > 0) {
        let parentIndex = Math.floor(elementIndex - 1 / 2);
        let parentElement = this.values[parentIndex];
  
        if (nodeToShift.weight >= parentElement.weight) break;
  
        this.values[elementIndex] = parentElement;
        this.values[parentIndex] = nodeToShift;
        elementIndex = parentIndex;
      }
      return this.values;
    }
  
    Dequeue() {
      let max = this.values[0];
      let endValue = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = endValue;
        this.BubbleDown();
      }
      return max;
    }
    BubbleDown() {
      let idx = 0;
      let elementToSet = this.values[idx]; // 1
      let originalArrayLen = this.values.length - 1; // 5
      while (true) {
        let swapIndex = null;
        let childLeftElement, childRightElement;
        let childLeftIndex = 2 * idx + 1; // 1
        let childeRightIndex = 2 * idx + 2;
        if (childLeftIndex <= originalArrayLen) {
          childLeftElement = this.values[childLeftIndex];
          if (
            childLeftElement != null &&
            childLeftElement.weight < elementToSet.weight
          ) {
            swapIndex = childLeftIndex;
          }
        }
  
        if (childeRightIndex <= originalArrayLen) {
          childRightElement = this.values[childeRightIndex];
          if (
            (swapIndex == null &&
              childRightElement != null &&
              childRightElement.weight < elementToSet.weight) ||
            (swapIndex != null &&
              childRightElement != null &&
              childRightElement.weight < childLeftElement.weight)
          ) {
            swapIndex = childeRightIndex;
          }
        }
  
        if (swapIndex == null) break;
  
        this.values[idx] = this.values[swapIndex];
        this.values[swapIndex] = elementToSet;
        idx = swapIndex;
      }
    }
  }
  
class WeightedGraph {
  constructor() {
    this.adjacencyList = [];
  }

  AddVertex(vertex, weight) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  AddEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ val: vertex2, weight });
      this.adjacencyList[vertex2].push({ val: vertex1, weight });
    }
  }
}
