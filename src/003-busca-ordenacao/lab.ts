function quickSortV2(arr: number[], start: number = 0, end: number = arr.length - 1) {
    if (start >= end) return arr;

    let pivot = getRndInteger(start, end);

    const pivotValue = arr[pivot];
    let newPivot = start;

    for (let i = start; i <= end; i++) {
        if (arr[i] > pivotValue || i == pivot) {
            continue;
        }
        swapper(arr, i, newPivot);
        if (newPivot == pivot) {
            pivot = i;
        }
        newPivot++;
    }
    swapper(arr, newPivot, pivot);
    quickSortV2(arr, start, (newPivot - 1));
    quickSortV2(arr, (newPivot + 1), end);
    return arr;
}

function swapper(arr: number[], idx: number, newP: number) {
    const aux = arr[idx];
    arr[idx] = arr[newP];
    arr[newP] = aux;
}


function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(quickSortV2([9,8,7,6,5,4,3,2,1,0]));


console.log('res:', quickSortV2([5, 4, 3, 2, 1, 0]));
console.log('res:', quickSortV2([]));
console.log('res:', quickSortV2([5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 0]));
console.log('res:', quickSortV2([1, 2, 3, 4, 5]));
console.log('res:', quickSortV2([5, 0, 3, 1, 2, 4, 6]));
console.log('res:', quickSortV2([5, 0, 3, 1, 2, 4]));2