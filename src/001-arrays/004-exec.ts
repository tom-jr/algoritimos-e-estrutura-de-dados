
const sellers: any[] = [
    {
        "name": "Barry Allen",
        "amount": 18196.0
    },
    {
        "name": "Logan",
        "amount": 4255.0
    },
    {
        "name": "Maria",
        "amount": 10298.0
    },
    {
        "name": "Ana",
        "amount": 26485.0
    },
    {
        "name": "Aurora",
        "amount": 19982.0
    },
    {
        "name": "Noah",
        "amount": 15820.0
    },
    {
        "name": "Leo",
        "amount": 21412.0
    },
    {
        "name": "Alex",
        "amount": 12000.0
    }
];

function greatestSeller(arr: any[]) {
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].amount > arr[index].amount) {
            index = i;
        }
    }

    return arr[index];
}


const res = greatestSeller(sellers);

console.log(res);
