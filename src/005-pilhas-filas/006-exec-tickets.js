function ticketsV1(list, k) {
    let timerCount = 0;

    const objList = list.map((item, idx) => { return { position: idx, qtdTickets: item } });

    while (objList.length > 0) {
        const firsOne = objList[0];
        if (firsOne.qtdTickets == 1) {
            if (firsOne.position == k) {
                return (++timerCount);
            } else {
                timerCount++;
                objList.shift();
            }
        } else {
            firsOne.qtdTickets = firsOne.qtdTickets - 1;
            objList.shift();
            objList.push(firsOne);
            timerCount++;
        }
    }
}

function ticketsV2(list, k) {
    let timerCount = 0;
    while (list.length > 0) {
        let first = list[0];
        if (k === 0) {
            if (first == 1) {
                return ++timerCount;
            } else {
                list.shift();
                list.push(--first);
                timerCount++;
                k = list.length - 1;
            }
        } else {
            list.shift();
            if (first > 1) {
                list.push(--first);
            }
            timerCount++;
            k--;
        }
    }
}

function ticketsV3(list, k) {
    let head = 0;
    let timerCount = 0;
    let tail = list.length - 1;

    while (head <= tail) {
        if (k === 0) {
            if (list[head] === 1) {
                return ++timerCount;
            } else {
                tail++;
                list[tail] = --list[head];
                head++;
                k = tail - head;
                timerCount++;
            }
        } else {
            if (list[head] > 1) {
                tail++;
                list[tail] = --list[head];
            }
            head++;
            timerCount++;
            k--;
        }
    }
}

function ticketsV4(list, k) {
    //[2, 3, 2], 2
    let head = 0;
    let tail = (list.length - 1);
    let timerCount = 0;

    while (true) {
        if (list[head] == 0) continue;
        list[head] -= 1;
        if (head == k && list[head] == 0) {
            return ++timerCount
        } else {
            head = ++head > tail ? 0 : ++head;
            timerCount++;
        }
    }

}

console.log('V1,####');
console.log('tickets([2,3,2], 2): ', ticketsV1([2, 3, 2], 2)); //6
console.log('tickets([1,1], 1): ', ticketsV1([1, 1], 1)); //2
console.log('tickets([5, 1, 1, 1], 0): ', ticketsV1([5, 1, 1, 1], 0)); //8
console.log('V1,####\n\n\n');

console.log('V2,####');
console.log('tickets([2,3,2], 2): ', ticketsV2([2, 3, 2], 2)); //6
console.log('tickets([1,1], 1): ', ticketsV2([1, 1], 1)); //2
console.log('tickets([5, 1, 1, 1], 0): ', ticketsV2([5, 1, 1, 1], 0)); //8
console.log('V2,####\n\n\n');

console.log('V3,####');
console.log('tickets([2,3,2], 2): ', ticketsV3([2, 3, 2], 2)); //6
console.log('tickets([1,1], 1): ', ticketsV3([1, 1], 1)); //2
console.log('tickets([5, 1, 1, 1], 0): ', ticketsV3([5, 1, 1, 1], 0)); //8
console.log('V3,####\n\n\n');


console.log('V4,####');
console.log('tickets([2,3,2], 2): ', ticketsV4([2, 3, 2], 2)); //6
console.log('tickets([1,1], 1): ', ticketsV3([1, 1], 1)); //2
console.log('tickets([5, 1, 1, 1], 0): ', ticketsV3([5, 1, 1, 1], 0)); //8
// console.log('V3,####\n\n\n');
