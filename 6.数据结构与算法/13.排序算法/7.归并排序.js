
/**
 * 归并排序
 * 把序列分裂成前后两部分，对两部分分别排序，排序的方法是继续分裂，直到序列足够小从而自然有序，然后再将有序的两部分合并在一起
 * 时间复杂度nlog2n,空间复杂度n,稳定排序
 */
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle, array.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}
