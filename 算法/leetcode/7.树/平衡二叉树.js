/**
 * 二叉树：每个节点最多拥有两个子节点
 * 完全二叉树：除了最底层，其他层的节点都被元素填满，且最底层从左到右填入
 * 满二叉树：每个非叶子节点都有两个子节点
 * 二叉查找树：前序遍历后递增的二叉树
 * 平衡树：每一个结点的左子树和右子树高度差最多为 1
 * 自平衡二叉查找树：左右子树高度差最多为1 的二叉查找树，有AVL树、红黑树等结构
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root == null) {
        return true;
    }
    return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

var height = function(root) {
    if(root == null) {
        return 0;
    }
    return Math.max(height(root.left), height(root.right)) + 1;
};
