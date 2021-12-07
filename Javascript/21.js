// 21. 合并两个有序链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let head = new ListNode()
    const compare = (h,a,b) => {
        if(a.val<=b.val){
            h.next = a
            if(a.next){
                compare(h.next,a.next,b)
            }else{
                h.next.next = b
            }
        }
        else {
            h.next = b
            if(b.next){
                compare(h.next,a,b.next)
            }else{
                h.next.next = a
            }
        }
    }
    if(!list1) return list2
    if(!list2) return list1
    compare(head,list1,list2)
    return head.next
};