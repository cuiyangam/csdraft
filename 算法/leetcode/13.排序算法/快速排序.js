
/**
 * 快速排序
 */
function quickSort(a) {
    quickSortInternally(a, 0, a.length - 1);
}
function quickSortInternally(a, p, r) {  // 快速排序递归函数，p,r为下标
    if (p >= r) return;
    let q = partition(a, p, r); // 获取分区点
    quickSortInternally(a, p, q - 1);
    quickSortInternally(a, q + 1, r);
}

function partition(a, p, r) {  // 快排的关键
    let pivot = a[r];
    let i = p;
    for (let j = p; j < r; ++j) {
        if (a[j] < pivot) {  // j 与分区点比较，交换的却是i 与 j,保证了迭代完后i左边的序列都比分区点小
            swap(a, i, j);
            ++i;
        }
    }
    swap(a, i, r);
    return i;
}
function findKth(a, k) {  // 查找第k小的元素
    return find(a, 0, a.length - 1, k);
}
function find(a, p, r, k) {  // 除 k 外，均为下标值
    let q = 0;
    q = partition(a, p, r);
    if (q > k - 1) {
        return find(a, p, q - 1, k);
    } else if (q < k - 1) {
        return find(a, q + 1, r, k);
    }
    return a[q];
}
function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}

