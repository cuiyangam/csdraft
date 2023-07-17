/**
 * 插入排序 n^2 稳定排序
 */
function insertSort(array) {
    if (!check(array)) return;
    let i, j, temp;
    for (i = 1; i < array.length; i++) {  // 第一个元素默认有序，从第二至最后一个元素依次插入前面有序部分
        temp = array[i];  // 保留待插入的元素
        for (j = i - 1; j >= 0; j--) {  // 前i-1个元素是有序的，在其中寻找合适的位置插入i
            if (array[j] > temp) {  // 从有序部分的最后一个元素起，如果该元素大于待插入元素
                array[j + 1] = array[j];  // 将其后移
            } else {
                break;  // 否则，暂停搬移有序部分
            }
        }
        array[j + 1] = temp;  // 此时的索引 j + 1即为应该插入的位置
    }
    return array;
};
function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}
