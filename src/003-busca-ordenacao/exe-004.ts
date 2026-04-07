function selectionSort(arr: number[]) {
    let head = 0;

    while (head < arr.length) {
        let lowest = head;
        for (let i = head; i < arr.length - 1; i++) {
            if (arr[lowest] > arr[i + 1]) {
                lowest = i + 1;
            }
        }
        if (lowest != head) {
            let h = arr[head]
            arr[head] = arr[lowest];
            arr[lowest] = h;
        }
        head++;
    }
    return arr;
}

const result = selectionSort([5, 1, 4, 2, 3]);
console.log(result);
