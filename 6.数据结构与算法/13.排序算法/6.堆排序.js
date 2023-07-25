
/**
 * 堆排序
 * 堆是节点大于或小于所有子节点的完全二叉树
 * 
 */
function heapSort(arr) {
    // 构建大顶堆
    const lastIndex = arr.length - 1;
    const lastNonLeafIndex = Math.floor(lastIndex / 2); // 最后一个非叶子节点的下标
    for (let i = lastNonLeafIndex; i >= 0; i--) {
        heapify(arr, i, lastIndex);
    }
 
    // 依次将堆顶元素放到最后,再对-1后规模的堆重新堆化
    for (var i = lastIndex; i >= 0; i--) {
        swap(arr, 0, i);
        heapify(arr, 0, i);
    }
    return arr;
}

function heapify(arr, i, lastIndex) {     // 堆调整
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
 
    if (left <= lastIndex && arr[left] > arr[largest]) {
        largest = left;
    }
 
    if (right <= lastIndex && arr[right] > arr[largest]) {
        largest = right;
    }
 
    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest, largest);
    }
}
 
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
