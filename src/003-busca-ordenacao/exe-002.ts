function bubbleSort(arr: number[]) {
    let swapped = true;
    let n = arr.length - 1;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < n ; i++) {
            let suc = arr[i + 1];
            if (arr[i] > suc) {
                arr[i + 1] = arr[i];
                arr[i] = suc;
                swapped = true;
            }
        }
        n--;
    }
    return arr;
}

const res = bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(res);
// O(n²)