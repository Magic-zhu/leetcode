/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 //反转链表
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //占用内存小 
 var reverseList = function(head) {
	let newHead = null;
	let node ;
	while(head!=null){
		node = head;
		head = head.next;
		node.next = newHead;
		newHead = node;
	}
	return newHead
};