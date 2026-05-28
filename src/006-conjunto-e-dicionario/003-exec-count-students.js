function studentsCountV1(courses) {
    const mySet = new Set(courses.flatMap(item => item));
    return mySet;
}

function studentsCountV2(courses) {
    const mySet = new Set();

    for (const course of courses) {
        for (const item of course) {
            mySet.add(item);
        }
    }

    return mySet;
}

function logDuration( end, start) {
    const time = (end - start);
    console.log(` ${time.toFixed(3)}ms`)
}

const t1 = performance.now();
const res = studentsCountV1([
    [15, 21, 80, 42],
    [21, 80, 47],
    [12, 21, 47, 35]
]);
const t2 = performance.now();
const time = t2 - t1;

console.log('students: ', res.size);
logDuration(t2,t1)
