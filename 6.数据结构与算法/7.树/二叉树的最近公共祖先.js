/**
 * 236. 二叉树的最近公共祖先[中等]
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
 */

/**
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root == null || root == p || root == q) {
        return root;
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) {// 在root两侧
        return root;
    }
    if (left!= null || right!= null) {// 在root一侧
        return left!= null? left : right;
    }
    return null;// 在root两侧或一侧都没有

};

/**
 * 存储父节点
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const parent = new WeakMap();
    const visited = new WeakSet();
    let dfs = (node) => {
        if (node.left != null) {
            parent.set(node.left, node);
            dfs(node.left);
        }
        if (node.right != null) {
            parent.set(node.right, node);
            dfs(node.right);
        }
    }
    dfs(root);
    while (p != null) {
        visited.add(p);
        p = parent.get(p);
    }
    while (q != null) {
        if (visited.has(q)) {
            return q;
        }
        q = parent.get(q);
    }
    return null;
};
