// Functions
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head == undefined || head.next == undefined) return head;
  let currentHead = head;
  while (currentHead != undefined) {
      if (currentHead.next == undefined) break;
      const newNextNode = new ListNode(currentHead.val, currentHead.next.next)
      currentHead.val = currentHead.next.val;
      currentHead.next = newNextNode;
      currentHead = currentHead.next.next;
  };
  return head;
};

// Testing
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Input: head = []
// Output: []
// Input: head = [1]
// Output: [1]