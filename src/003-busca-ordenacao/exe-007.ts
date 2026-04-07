//QuickSort
//Lomuto Partition Scheme
function quickSortV1(arr: number[], s = 0, e = (arr.length - 1)) {
    if (s >= e) return arr;
    const p = e;

    let np = s;
    for (let i = s; i < e; i++) {
        if (arr[i] > arr[e]) continue;

        //swap i <==> np
        swapper(arr, i, np);
        np++;
    }

    //swap p <==> np
    swapper(arr, e, np);

    quickSortV1(arr, s, (np - 1));
    quickSortV1(arr, (np + 1), e);
    return arr;
}

function swapper(arr: number[], idx: number, newP: number) {
    const aux = arr[idx];
    arr[idx] = arr[newP];
    arr[newP] = aux;
}

console.log('res:', quickSortV1([5, 4, 3, 2, 1, 0]));
console.log('res:', quickSortV1([]));
console.log('res:', quickSortV1([5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 0]));
console.log('res:', quickSortV1([1, 2, 3, 4, 5]));
console.log('res:', quickSortV1([5, 0, 3, 1, 2, 4, 6]));
console.log('res:', quickSortV1([5, 0, 3, 1, 2, 4]));
