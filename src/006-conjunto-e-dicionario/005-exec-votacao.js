function counting(votes) {
    let myMap = new Map();
    for (let item of votes) {
        let values = item.split(',');
        if (myMap.has(values[0])) {
            myMap.set(values[0], myMap.get(values[0]) + Number(values[1]));

        } else {
            myMap.set(values[0], Number(values[1]));
        }

    }
    return myMap;
}

const res = counting([
    "Alex Blue,15",
    "Maria Green,22",
    "Bob Brown,21",
    "Alex Blue,30",
    "Bob Brown,15",
    "Maria Green,27",
    "Maria Green,22",
    "Bob Brown,25",
    "Alex Blue,31"
]);

console.log(res);
