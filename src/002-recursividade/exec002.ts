function fatorial(num: number): number {
    return num == 1 ? num : num * fatorial(num - 1);
}

const res = fatorial(3);
console.log(res);
