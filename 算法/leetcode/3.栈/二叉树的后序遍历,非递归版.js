/**
 * https://leetcode.cn/problems/binary-tree-postorder-traversal/
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
var postorderTraversal = function (root) {
    const result = [];
    post(root, result);
    return result;
};

var post = function (node, result) {
    if (node) {
        let stack1 = [];
        let stack2 = [];
        // 后序遍历是先左再右最后根
        // 所以对于一个栈来说，应该先 push 根节点
        // 然后 push 右节点，最后 push 左节点
        stack1.push(node);
        while (stack1.length > 0) {
            node = stack1.pop();
            stack2.push(node);
            if (node.left) {
                stack1.push(node.left);
            }
            if (node.right) {
                stack1.push(node.right);
            }
        }
        while (stack2.length > 0) {
            result.push(stack2.pop().val);
        }
    }
}
