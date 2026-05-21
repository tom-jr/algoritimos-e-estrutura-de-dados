//    "students": [1, 1, 0, 0],
//  "sandwiches": [0, 1, 0, 1]

//    "students": [0, 0, 0, 1],
//  "sandwiches": [1, 1, 1, 1]
function countStudentsV1(students, sandwiches) {
    let sanHead = 0;

    let stdHead = 0;
    let stdTail = students.length - 1;

    let count = 0;
    let stdFed = 0;

    while (sanHead < sandwiches.length) {
        count++;

        if (students[stdHead] == sandwiches[sanHead]) {
            stdFed++;
            sanHead++;
            students[stdHead] = -1;
            if (stdHead == stdTail) {
                stdHead = 0;
            } else {
                stdHead++;
            }
        } else {
            if (stdHead == stdTail) {
                if (stdFed != count / students.length) {
                    return students.length - stdFed;
                }
                stdHead = 0;
            } else {
                stdHead++;
            }
        }
    }
    return students.length - stdFed;
}

function countStudentsV2(students, sandwiches) {
    let sanHead = 0;
    let stdFed = 0;

    while (sanHead < sandwiches.length) {
        for (let i = 0; i < students.length; i++) {
            if (students[i] == sandwiches[sanHead]) {
                sanHead++;
                students[i] = -1;
                stdFed++;
                break;
            } else {
                if (i == sandwiches.length - 1) {
                    return students.length - stdFed;
                }
            }
        }
    }
    return students.length - stdFed;
}
// console.log(countStudentsV1([1, 1, 0, 0], [0, 1, 0, 1]));
// console.log(countStudentsV1([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));

console.log(countStudentsV2([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudentsV2([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));

/**
 * 3
 * [1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]
 * [1, 1, ,, 1], [, 0, 1, 1]
 * 
 */
