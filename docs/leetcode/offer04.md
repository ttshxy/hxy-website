剑指 Offer 04. 二维数组中的查找
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

 

示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。

有序数组查找用二分查找。
```js
const binarySearch = (arr:number[], value: number) => {
    let left = 0, right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right)/ 2);
        if(value === arr[mid]){
            return mid;
        }else if(value < arr[mid]){
            right = mid - 1;
        }else if(value > arr[mid]){
            left = mid + 1;
        }
    }
    return -1;
}

function findNumberIn2DArray(matrix: number[][], target: number): boolean {
    for(let i = 0; i < matrix.length; i++){
        let result = binarySearch(matrix[i],target);
        if(result !== -1){
            return true;
        }
    }
    return false;
};
```
