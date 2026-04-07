function calcScalar(arr1: number[], arr2: number[]) {
    if (arr1.length != arr2.length) return;

    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += (arr1[i] * arr2[i]);
    }
    return sum;
}

const res = calcScalar([1, 0, 0, 2, 3], [0, 3, 0, 4, 0]);
const res2 = calcScalar([0, 1, 0, 0, 0], [0, 1, 0, 0, 0]);
const res3 = calcScalar([0, 1, 0, 0, 2, 0, 0], [1, 0, 0, 0, 3, 0, 4]);

console.log(res);
console.log(res2);
console.log(res3);