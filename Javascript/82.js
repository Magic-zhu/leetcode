/**
 * 82. 删除排序链表中的重复元素 II
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
 var deleteDuplicates = function(head) {
    let d = new ListNode(-1);
    d.next = head;
    let x = d;
    while (x.next && x.next.next) {
        if (x.next.val === x.next.next.val) {
            let t = x.next.val;
            while (x.next && x.next.val === t) x.next = x.next.next;
        } else {
            x = x.next;
        }
    }
    return d.next;
};