/**
 * 111. 二叉树的最小深度
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 */

/**
 * 注意是根节点到任何一个叶节点的最短路径上的节点数量
 * 递归迭代的过程会遇到如下情况
 *   叶节点：左右子树都为null
 *   非叶非根节点：
 *     左右子树仅有一颗：取仅有的一颗子树的高度
 *     左右子树都有：取两颗子树的高度的较小值
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
 * @return {number}
 */
var minDepth = root => {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return 1;
    }
    let min = Infinity;
    if (root.left !== null) {
        min = Math.min(min, minDepth(root.left));
    }
    if (root.right !== null) {
        min = Math.min(min, minDepth(root.right));
    }
    return min + 1;
}
