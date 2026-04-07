function mergeSortV1(arr: number[]) {

    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);

    const arr1 = mergeSortV1(arr.slice(0, middle));
    const arr2 = mergeSortV1(arr.slice(middle));

    const arrReturn: number[] = [];

    for (let i = 0, j = 0; (i + j) < (arr1.length + arr2.length);) {
        if (arr1[i] === undefined || (arr1[i] > arr2[j])) {
            arrReturn.push(arr2[j]);
            j++;
        } else {
            arrReturn.push(arr1[i]);
            i++;
        }
    }

    return arrReturn;
}


function mergeSortV2(arr: number[], s = 0, e = (arr.length - 1)) {

    if (s >= e) return arr;
    const m = Math.floor((s + e) / 2);



    mergeSortV2(arr, s, m);
    mergeSortV2(arr, (m + 1), e);

    let i = s, j = m + 1;
    const aux: number[] = [];

    while (i <= m || j <= e) {
        if (j > e) {
            while (i <= m) {
                aux.push(arr[i]);
                i++;
            }
            continue;
        }
        if (i > m) {
            //resto de j em aux
            while (j <= e) {
                aux.push(arr[j]);
                j++;
            }
            continue;
        }

        if (arr[i] > arr[j]) {
            aux.push(arr[j]);
            j++;
            continue;
        }

        if (arr[i] <= arr[j]) {
            aux.push(arr[i]);
            i++;
            continue;
        }
    }
    for (let i = 0, j = s; i < aux.length; i++, j++) {
        arr[j] = aux[i];
    }
    return arr;
}

console.log('res:', mergeSortV1([5, 4, 3, 2, 1, 0]));
console.log('res:', mergeSortV1([]));
console.log('res:', mergeSortV1([5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 0]));
console.log('res:', mergeSortV1([1, 2, 3, 4, 5]));
console.log('res:', mergeSortV1([5, 0, 3, 1, 2, 4, 6]));
console.log('res:', mergeSortV1([5, 0, 3, 1, 2, 4]));

// console.log(mergeSortV2([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
// console.log(mergeSortV1([9, 1, 8, 2, 7, 3, 6, 4, 5]));
// console.log(mergeSortV1([0, 1, 2]));
// console.log(mergeSortV1([2, 2]));
// console.log(mergeSortV1([]));


// console.log(mergeSortV2([10, 9]));





