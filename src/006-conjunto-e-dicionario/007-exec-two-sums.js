function twoSum(nums, target) {
    const alreadyChecks = new Map();

    for (let idx = 0; idx < nums.length; idx++) {
        const diff = target - nums[idx];
        if (alreadyChecks.has(diff)) {
            return [alreadyChecks.get(diff), idx];
        } else {
            alreadyChecks.set(nums[idx], idx);
        }
    }
}

console.log(twoSum([8, 2, 7, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 5, 7, 2, 4, 8, 1, 6], 15));

