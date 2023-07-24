
/**
 * 快速排序
 * 一轮排序将数组分为前后相对有序的两部分，递归将左右两部分排序完即可得到整体有序
 * 稳定排序([4,6,6,6,6,2,2 ],)，平均时间复杂度nlog2n，空间复杂度nlog2n
 */

function quickSort(a, left, right) {
    if (left >= right) return;
    let pivot = partition(a, left, right); // 获取分区基准点
    quickSort(a, left, pivot - 1);
    quickSort(a, pivot + 1, right);
}

function partition(a, left, right) {
    let pivot = a[left];
    let toBeSwapedIndex = left + 1;
    for (let j = toBeSwapedIndex; j <= right; j++) {
        if (a[j] < pivot) { // 比基准元素小，并且不是自己交换自己，执行交换
            if(toBeSwapedIndex < j) {
                swap(a, toBeSwapedIndex, j);
            }
            toBeSwapedIndex++;
        }
    }
    swap(a, left, toBeSwapedIndex - 1); // 一轮划分完后，toBeSwapedIndex 之前所有元素都小于基准元素
    return toBeSwapedIndex -1;
}

function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}
