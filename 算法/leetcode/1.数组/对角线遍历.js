/**
 * 498. 对角线遍历 https://leetcode.cn/problems/diagonal-traverse/
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    /**
     * [0,0,0,0,1]
     * [1,1,1,1,1]
     * [1,1,1,1,1]
     * 
     *   行+列为偶数，左下到右上
     *   行+列为奇数，右上到左下
     */
    const rows = mat.length;
    const cols = mat[0].length;
    const dias = rows + cols - 2;
    let result = [];
    for (let d = 0; d <= dias; d++) {
        if (d % 2 === 0) {
            let row = Math.min(d, rows - 1);
            for (i = row; i >= 0 && d - i <= cols - 1; i--) {
                result.push(mat[i][d - i]);
            }
        } else {
            let col = Math.min(d, cols - 1)
            for (j = col; j >= 0 && d - j <= rows - 1; j--) {
                result.push(mat[d - j][j]);
            }
        }
    }
    return result;
};

mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(findDiagonalOrder(mat));