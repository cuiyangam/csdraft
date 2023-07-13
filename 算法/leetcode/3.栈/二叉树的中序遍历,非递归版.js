/**
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/
 */

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
var inorderTraversal = function (root) {
    const result = [];
    mid(root, result);
    return result;
};

var mid = function (node, result) {
    if (node) {
        let stack = [];
        while (stack.length > 0 || node) {
            if (node) {
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop();
                result.push(node.val);
                node = node.right;
            }
        }
    }
}
