// Function
/**
* @param {number[]} nums
* @return {Map} graph
**/
var createGraph = function(nums) {
  const graph = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const maxJump = nums[i];
    const neighbors = [];
    for (let j = 1; j <= maxJump && i + j < nums.length; j++) {
      neighbors.push(i + j);
    }
    graph.set(i, neighbors);
  }

  return graph;
}

/** 
 * @param {number[]} nums
 * @param {Map} graph
 * @return {Array} ancestors
 **/
var bfs = function(graph, length) {
  const queue = [];
  queue.push(0);
  let init = 0;
  const ancestors = new Array(length).fill(-1);
  while (init < queue.length) {
    const neighbors = graph.get(queue[init]);
    for (let i = 0; i < neighbors.length; i++) {
      if (ancestors[neighbors[i]] == -1) {
        ancestors[neighbors[i]] = queue[init];
        queue.push(neighbors[i]);
      }
    }
    init++;
  }

  return ancestors;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (!nums) return 0;
  // Create graph -> adjacency list
  const graph = createGraph(nums);

  // Graph testing
  // for (const [key, value] of graph.entries()) {
  //   console.log(`${key} = ${value}`);
  // }

  // Do a BFS
  const ancestors = bfs(graph, nums.length);

  // BFS testing
  // console.log(ancestors);

  // Construct the shortest path
  let pos = ancestors.length - 1;
  const path = [];
  path.push(pos);
  while (pos > 0) {
    pos = ancestors[pos];
    path.push(pos);
  }

  return path.length - 1;
};

// Testing
const nums1 = [2,3,1,1,4];
const nums2 = [2,3,0,1,4];
const nums = nums1;
console.log(jump(nums));