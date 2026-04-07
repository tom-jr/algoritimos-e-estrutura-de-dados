function fatorialCauda(num: number, total: number): number {
    if (num == 0) {
        return total;
    }
    total = total * num;
    return fatorialCauda((num - 1), total);
}

console.log(fatorialCauda(5, 1));