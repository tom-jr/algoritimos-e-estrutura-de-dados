function fun(num: number): number {
    if (num == 0) return num;
    return num + fun(num - 1);
}

const res = fun(3);


console.log(res);
