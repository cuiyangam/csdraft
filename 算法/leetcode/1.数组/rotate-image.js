/**
 * https://leetcode.cn/problems/rotate-image/
 */


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 沿1 5 9对角线翻转，然后沿2 5 8等分线翻转
    rotate135(matrix);
    rotate90(matrix);
};


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * [1,2]
 * [3,4]
 */
var rotate135 = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    for(let i = 0; i < rows; i++) {
        for(let j = i; j < cols; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}

var rotate90 = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    for(let i = 0; i < rows; i++) {
        reverseList(matrix[i]);
    }
}

var reverseList = function(list) {
    let i = 0;
    let j = list.length - 1;
    while(i < j) {
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
        i++;
        j--;
    }
}

matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)
console.log(matrix)