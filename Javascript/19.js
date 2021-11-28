/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let nodeArr = [];
  pointer = head;
  while (pointer) {
    nodeArr.push(pointer);
    pointer = pointer.next;
  }
  let index = nodeArr.length - n;
  if (index === 0) {
    return nodeArr[0].next;
  }
  if (index === nodeArr.length - 1) {
    nodeArr[index - 1].next = null;
    return head;
  }
  nodeArr[index - 1].next = nodeArr[index + 1];
  return head;
};
