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
