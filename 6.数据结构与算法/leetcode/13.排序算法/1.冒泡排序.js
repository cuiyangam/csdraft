
/**
 * 冒泡排序 每轮冒泡两两比较相邻元素 n^2 稳定排序
 */
function bubbleSort(a) {
    const lastIndex = a.length - 1;
    for (let i = 0; i < lastIndex; ++i) { 
        const lastUnSortedIndex = lastIndex - i;
        for (let j = 0; j < lastUnSortedIndex; ++j) {
            if (a[j] > a[j + 1]) {
                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
            }
        }
    }
}

const a = [1, 2, 9, 4, 5];
bubbleSort(a);
console.log(a);
