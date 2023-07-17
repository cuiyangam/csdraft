
/**
 * 归并排序算法, a是数组，n表示数组大小.稳定的排序算法
 * @param {*} a 
 */
function mergeSort(a) {
    mergeSortInternally(a, 0, a.length - 1);
}

// 递归调用函数
function mergeSortInternally(a, p, r) {
    if (p >= r) return;  // 递归终止条件
    let q = Math.floor(p + (r - p) / 2);  // 取p到r之间的中间位置q,防止（p+r）的和超过int类型最大值
    // 分治递归
    mergeSortInternally(a, p, q);
    mergeSortInternally(a, q + 1, r);

    // 将A[p...q]和A[q+1...r]合并为A[p...r]
    merge(a, p, q, r);
}

function merge(a, p, q, r) {  // 归并两个有序数组
    let i = p;
    let j = q + 1;
    let k = 0; // 初始化变量i, j, k
    let tmp = new Array(r - p + 1); // 申请一个大小跟a[p...r]一样的临时数组
    while (i <= q && j <= r) {  // 两个数组都没有归并完
        if (a[i] <= a[j]) {
            tmp[k++] = a[i++];
        } else {
            tmp[k++] = a[j++];
        }
    }
    let start = i;  // 判断哪个子数组中有剩余的数据
    let end = q;
    if (j <= r) {
        start = j;
        end = r;
    }

    while (start <= end) {  // 将剩余的数据拷贝到临时数组tmp
        tmp[k++] = a[start++];
    }

    for (i = 0; i <= r - p; ++i) {  // 将tmp中的数组拷贝回a[p...r]
        a[p + i] = tmp[i];
    }
}
function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}
