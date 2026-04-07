function duplicateZero(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) continue;
        arr.pop();
        arr.splice(i, 0, 0);
        i++;
    }
    return arr;
}

const res = duplicateZero([1, 0, 2, 3, 0, 4, 5, 0]);
const res2 = duplicateZero([1, 2, 3]);

console.log(res);
console.log(res2);