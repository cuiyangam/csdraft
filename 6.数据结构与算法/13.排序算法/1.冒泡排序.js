
// https://juejin.cn/post/6844904093740171272

/**
 * 冒泡排序
 * 每轮冒泡两两比较相邻元素，一轮冒泡结束后确定一个最大元素
 * 时间复杂度n^2,空间复杂度n,稳定排序
 */
function bubbleSort(a) {
    const lastIndex = a.length - 1;
    for (let i = 0; i < lastIndex; ++i) {
        const lastUnSortedIndex = lastIndex - i;
        for (let j = 0; j < lastUnSortedIndex; ++j) {
            if (a[j] > a[j + 1]) { // 交换
                swap(j, j + 1);
            }
        }
    }
}

function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}
