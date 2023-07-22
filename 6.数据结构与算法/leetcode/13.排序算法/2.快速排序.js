
/**
 * 快速排序
 * 一轮排序将数组分为前后相对有序的两部分，递归将左右两部分排序完即可得到整体有序
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
        if (a[j] < pivot) {
            if(toBeSwapedIndex < j) {
                swap(a, toBeSwapedIndex, j);
            }
            toBeSwapedIndex++;
        }
    }
    swap(a, left, toBeSwapedIndex - 1);
    return toBeSwapedIndex -1;
}

function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}

const a = [1, 2, 9, 4, 5];
quickSort(a, 0, a.length - 1);
console.log(a);
