function insertionSortV1(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {

        for (let j = i; j > 0; j--) {
            if (arr[j] > arr[j- 1]) continue;
            
            const aux = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = aux;

        }
    }
    return arr;
}

function insertionSortV2(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {

        for (let j = i; j > 0; j--) {
            if (arr[j] > arr[j- 1]) break;
            
            const aux = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = aux;

        }
    }
    return arr;
}

const res = insertionSortV1([5,4,3,2,1]);
const res2 = insertionSortV1([1,2,3,4,5]);
const res3 = insertionSortV1([5,1,4,2,3]);
console.log(res);
console.log(res2);
console.log(res3);
