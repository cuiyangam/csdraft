/* 
 *选择排序 n^2 不稳定排序
 */
function selectSort(a) {
    for (let i = 0; i < a.length - 1; ++i) {
        let minIndex = i;  // 查找最小值
        for (let j = i + 1; j < a.length; ++j) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        let tmp = a[i];  // 交换
        a[i] = a[minIndex];
        a[minIndex] = tmp;
    }
}
