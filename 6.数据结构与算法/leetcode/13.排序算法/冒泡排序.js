/**
 * 冒泡排序 n^2 稳定排序
 */
function bubbleSort(a) {
    for (let i = 0; i < a.length - 1; ++i) {  // n个元素需要n-1趟起泡排序，第i趟起泡会确定第i大元素
        let flag = false;  // 提前退出冒泡循环的标志位
        for (let j = 0; j < a.length - 1 - i; ++j) {  // 每趟起泡排序都需要比较到 最后一个未排序的元素
            if (a[j] > a[j + 1]) { // 交换
                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
                flag = true;  // 表示有数据交换      
            }
        }
        if (!flag) break;  // 没有数据交换，说明排序已经完成，可以退出
    }
}
