function intersection(nums1, nums2) {
    const mySet1 = new Set(nums1);
    const mySet2 = new Set(nums2);


    return [...mySet1].filter(i => mySet2.has(i));
}

const res1 = intersection([1, 2, 2, 1], [2, 2]);
const res2 = intersection([4, 9, 5], [9, 4, 9, 8, 4]);

console.log('Intersection of [1,2,2,1] & [2,2] = ', res1);
console.log('Intersection [4,9,5] & [9,4,9,8,4] = ', res2);
