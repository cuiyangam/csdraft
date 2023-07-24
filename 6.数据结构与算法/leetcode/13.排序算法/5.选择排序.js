/**
 * 选择排序
 * 第x轮迭代找到第x小元素
 * 不稳定排序(5，8，5，2，9)， 时间复杂度n^2,空间复杂度1
 */
function selectSort(a) {
    for (let i = 0; i < a.length - 1; ++i) {
        let minIndex = i;  // 查找最小值
        for (let j = i + 1; j < a.length; ++j) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        swap(a, i, minIndex);
    }
}

function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}
