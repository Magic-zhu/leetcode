/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if(!root){
        return root
    }
    const fill = (node,parent,tag) => {
        if(!parent ||!parent.right){
            node.next = null
        }else{
            if(tag===0){
                node.next = parent.right 
            }else{
                node.next = parent.next?parent.left: null
            }
        }
        if(node.left){
            fill(node.left,node,0)
        }
        if(node.right){
            fill(node.right,node,1)
        }
    }
    fill(root,null,0)
    return root
};