// Funcions
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let itering = head;
  if (itering.next == null) return itering.next;
  let itering2 = head, i = 0;
  while (i != n && itering2 != null) {
    itering2 = itering2.next;
    i++
  }
  if (itering2 == null) {
    return head.next;
  }
  while (itering2 != null) {
    if (itering2.next == null) {
      itering.next = itering.next.next;
      return head;
    }
    itering = itering.next;
    itering2 = itering2.next;
  }
};

// Testing
const head1 = [1,2,3,4,5], n1 = 2;
const head2 = [1], n2 = 1;
const head3 = [1,2], n3 = 1;
const head4 = [1,2], n4 = 2;
const head = head1, n = n1;
console.log(removeNthFromEnd(head, n));
