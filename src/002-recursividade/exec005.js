function fibonacciTail(position, count = 0, pn1 = 0, pn2 = 0) {
    if (position <= 1) return position;
    if (position <= count) return pn1 + pn2;
    if (count == 0) return fibonacciTail(position, ++count, 0, 0);
    if (count == 1) return fibonacciTail(position, ++count, 1, 0);

    return fibonacciTail(position, ++count, pn1 + pn2, pn1);
}

const res = fibonacciTail(9);
console.log(res);
