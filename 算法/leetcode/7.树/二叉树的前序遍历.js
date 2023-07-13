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
var preorderTraversal = function(root) {
    const result = [];
    pre(root, result);
    return result;
};

var pre = function(root, result) {
    if (root) {
        result.push(root.val);
        pre(root.left, result);
        pre(root.right, result);
    }
}