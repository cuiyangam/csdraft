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
var inorderTraversal = function(root) {
    const result = [];
    mid(root, result);
    return result;
};

var mid = function(root, result) {
    if (root) {
        mid(root.left, result);
        result.push(root.val);
        mid(root.right, result);
    }
}