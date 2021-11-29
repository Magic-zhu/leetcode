/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    if(!root1) return root2
    if(!root2) return root1
    const merge = (a,b) => {
        a.val = a.val + b.val
        if(a.left && b.left){
            merge(a.left,b.left)
        }else{
            a.left = a.left?a.left:b.left
        }
        if(a.right && b.right){
            merge(a.right,b.right)
        }else{
            a.right = a.right?a.right:b.right
        }
    }
    merge(root1,root2)
    return root1
};