// Warm-up Exercises: Graph Operations

// 1. Create a function to convert an edge list to adjacency list
function edgeToAdjList(edges, n) {
    // Your code here
}

// 2. Create a function to perform DFS on a graph
function depthFirstSearch(graph, start) {
    // Your code here
}

// 3. Create a function to find all paths between two vertices
function findAllPaths(graph, start, end) {
    // Your code here
}

// Sample usage:
const edges = [[0, 1], [1, 2], [2, 0]];
console.log(edgeToAdjList(edges, 3));  
// Should output: [[1], [2], [0]]

const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: []
};
console.log(depthFirstSearch(graph, 0));  
// Should output: [0, 1, 2, 3]

console.log(findAllPaths(graph, 0, 3));  
// Should output: [[0, 2, 3], [0, 1, 2, 3]]
