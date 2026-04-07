function buscaBinaria(arr: number[], value: number, len = arr.length - 1, floor = 0) {
    let central = floor + Math.floor((len - floor) / 2);
    if (value > arr[len]) return -1;

    if (value == arr[central]) return central;

    if (value > arr[central]) {
        floor = central + 1;
        return buscaBinaria(arr, value, len, floor);
    }

    if (value < arr[central]) {
        len = central - 1;
        return buscaBinaria(arr, value, len, floor);
    }
    return -1
}

// const res = buscaBinaria([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
// console.log(res);


function buscaBinariaV2(arr: number[], value: number, l: number = 0, h: number = (arr.length - 1)) {
    let m = l + Math.floor((h - l) / 2);
    if (value == arr[m]) return m;
    if (l >= h) return -1;
    if (value < arr[m]) return buscaBinariaV2(arr, value, l, (m - 1));
    if (value > arr[m]) return buscaBinariaV2(arr, value, (m + 1), h);
}


function buscaBinariaIterativa(arr: number[], value: number) {

    let h = arr.length - 1;
    for (let i = 0; i <= h;) {
        const m = i + Math.floor((h - i) / 2);

        if (value == arr[m]) return m;
        if (value > arr[m]) {
            i = m + 1;
        } else {
            h = (m - 1);
        }
    }
    return -1;
}



const res = buscaBinariaIterativa([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9);
console.log(res);