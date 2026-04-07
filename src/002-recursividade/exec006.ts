function revers(list: any[]) {
    if (list.length <= 1) {
        return list;
    }

    const mid = Math.floor(list.length / 2);

    for (let i = 0; i < mid; i++) {
        const lastIndex = list.length - 1 - i;
        const last = list[lastIndex];
        const first = list[i];
        list[lastIndex] = first;
        list[i] = last;
    }
    return list;
}


function reverseRecursive(list: any[], listReversed: any[] = []) {
    if (list.length == 0) return listReversed;
    listReversed.push(list.pop());
    return reverseRecursive(list, listReversed)
}

function revRec2(list: any[], count = Math.floor(list.length / 2)) {

    const lastIndex = list.length - 1 - count;
    const last = list[lastIndex];
    const first = list[count];
    list[lastIndex] = first;
    list[count] = last;

    if (count == 0) return list;
    return revRec2(list, --count)

}

const res = revRec2(["maçã", "banana", "laranja", "uva", "manga"])
console.log(res);

