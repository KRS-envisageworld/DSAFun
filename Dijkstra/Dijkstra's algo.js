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
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  Dijkstra(start, end) {
    let distances = {};
    let nodeTrack = new PriorityQueue();
    let previousValue = {};
    let currentNode;
    let path = [];
    for (let vertex in this.adjacencyList) {
      if (vertex == start) {
        distances[vertex] = 0;
        nodeTrack.Enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodeTrack.Enqueue(vertex, Infinity);
      }
      previousValue[vertex] = null;
    }

    while (nodeTrack.values.length > 0) {
      currentNode = nodeTrack.Dequeue().val;
      if (currentNode == end) {
        while (previousValue[currentNode]) {
          path.push(currentNode);
          currentNode = previousValue[currentNode];
        }
        break;
      }

      if (currentNode || distances[currentNode] != Infinity) {
        for (let neighbor in this.adjacencyList[currentNode]) {
          let nextNode = this.adjacencyList[currentNode][neighbor];
          let currentDistance = distances[currentNode] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (currentDistance < distances[nextNeighbor]) {
            distances[nextNeighbor] = currentDistance;
            previousValue[nextNeighbor] = currentNode;
            nodeTrack.Enqueue(nextNeighbor, currentDistance);
          }
        }
      }
    }
    console.log(this.adjacencyList);
    console.log(distances);
    console.log(previousValue);
    console.log(nodeTrack);

    return path.concat(currentNode).reverse();
  }
}

var graph = new WeightedGraph();
graph.AddVertex("A");
graph.AddVertex("B");
graph.AddVertex("C");
graph.AddVertex("D");
graph.AddVertex("E");
graph.AddVertex("F");

graph.AddEdge("A", "B", 4);
graph.AddEdge("A", "C", 2);
graph.AddEdge("B", "E", 3);
graph.AddEdge("C", "D", 2);
graph.AddEdge("C", "F", 4);
graph.AddEdge("D", "E", 3);
graph.AddEdge("D", "F", 1);
graph.AddEdge("E", "F", 1);

graph.Dijkstra("A", "E");
