/*

 */
class Graph {
  constructor() {
    this.adjacencyList = [];
  }

  /*
        Add nodes with the empty array. Empty array will have reference of its conneted nodes.
    */
  AddVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  /*
        Add connetions between nodes. For this you need to add reference in both nodes of eachother.
    */
  AddEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  /*
    Remove remove of the nodes from both the nodes and to do that just use filter and on both the vertices. 
  */
  RemoveEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v != vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v != vertex1
      );
    }
  }

  /*
    Remove whole node and its reference from other nodes as well.
  */
  RemoveVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].legth) {
        let refVertex = this.adjacencyList[vertex].pop();
        this.RemoveEdge(refVertex, vertex);
      }

      delete this.adjacencyList[vertex];
    }
  }

  DFS(startingVertex) {
    let endResult = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;
    (function Travalsal(vertex) {
      if (vertex == null) {
        return;
      }
      visited[vertex] = true;
      endResult.push(vertex);

      adjacencyList[vertex].forEach((neighbour) => {
         if (!visited[neighbour]) {
          return Travalsal(neighbour);
        }
      });
    })(startingVertex);

    return endResult;
  }

  DFSIterative(startingVertex) {
    
    let stack = [startingVertex];
    let endResult = [];
    let visited = {};
    let visitedNode;
    if (startingVertex == null) {
      return endResult;
    }
    while(stack){
      visitedNode= stack.pop();
      endResult.push(visitedNode);
      this.adjacencyList[visitedNode].forEach(neighbour => {
        if(!this.visited[neighbour]){
      visited[visitedNode] = true;
          stack.push(neighbour);
        }
      });
    }
    return endResult;
  }

  BFS(startingVertex){
    let queue = [startingVertex];
    let endResult = [];
    let visited = {};
    let visitedNode;
    visited[startingVertex] = true;

    if (startingVertex == null) {
      return endResult;
    }

    while(queue){
      visitedNode= queue.shift();
      endResult.push(visitedNode);

      this.adjacencyList[visitedNode].forEach(neighbour => {
        if(!this.visited[neighbour]){
          visited[visitedNode] = true;
          queue.push(neighbour);
        }
      });
    }
    
    return endResult;
  }
}
