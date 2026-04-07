function maxOneSeq(arr: number[]) {
    const lengths = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
            if (i + 1 == arr.length) {
                lengths.push(count);
            }
        } else if (count > 0) {
            lengths.push(count);
            count = 0;
        }
    }
    return Math.max(...lengths);
}

//v2
function maxOneSeqV2(arr: number[]) {
    let processando = 0;
    let returnValue = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            processando++;
        } else {
            if (processando > returnValue) {
                returnValue = processando;
                processando = 0;
            }
        }
    }
    return returnValue > processando ? returnValue : processando;
}

console.log(maxOneSeq([1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1]));
console.log(maxOneSeqV2([1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1]));