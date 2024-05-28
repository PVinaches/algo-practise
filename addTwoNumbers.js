// Functions
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const nodeSum = new ListNode(-1);
  let nextExtra = 0, node1 = l1, node2 = l2, current = nodeSum;

  while(node1 != null && node2 != null) {
    let addValue = node1.val + node2.val + nextExtra;
    nextExtra = Math.floor(addValue / 10);
    addValue = addValue % 10;
    current.next = new ListNode(addValue);   
    current = current.next;
      
    if (node1.next == null && node2.next) {
      node1.next = new ListNode(0);
    } else if (node1.next && node2.next == null) {
      node2.next = new ListNode(0);
    }
    node1 = node1.next;
    node2 = node2.next;
  }
  if (nextExtra != 0) {
    current.next = new ListNode(nextExtra); 
  }
  return nodeSum.next;
};

//Test
const l1 = new ListNode(2);
let currentL1 = l1;
currentL1.next = new ListNode(4);
currentL1 = currentL1.next;
currentL1.next = new ListNode(3);

const l2 = new ListNode(5);
let currentL2 = l2;
currentL2.next = new ListNode(6);
currentL2 = currentL2.next;
currentL2.next = new ListNode(4);

const result = addTwoNumbers(l1, l2);
let resultCurrent = result;
let testResult = '';
while (resultCurrent != null) {
  testResult += resultCurrent.val + ' ';
  resultCurrent = resultCurrent.next;
}
console.log(testResult);