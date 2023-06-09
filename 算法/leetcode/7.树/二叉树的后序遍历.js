/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];
    post(root, result);
    return result;
};

var post = function(root, result) {
    if (root) {
        post(root.left, result);
        post(root.right, result);
        result.push(root.val);
    }
}