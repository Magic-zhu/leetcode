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
 var middleNode = function(head) {
    let nodeArr = []
    pointer = head
    while (pointer) {
        nodeArr.push(pointer)
        pointer = pointer.next
    }
    let index
    if(nodeArr.length%2===0){
        index = nodeArr.length/2+1
    }else{
        index = (nodeArr.length+1)/2 
    }
    return nodeArr[index-1]
};