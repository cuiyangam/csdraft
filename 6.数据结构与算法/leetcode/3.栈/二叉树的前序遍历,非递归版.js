/**
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/
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
var preorderTraversal = function (root) {
    const result = [];
    pre(root, result);
    return result;
};

var pre = function (node, result) {
    if (node) {
        let stack = [];
        stack.push(node);
        while (stack.length > 0) {
            node = stack.pop();
            result.push(node.val);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
    }
}
