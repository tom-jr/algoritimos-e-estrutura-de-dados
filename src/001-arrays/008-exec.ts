/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums: number[]) {
    if (nums.length <= 1) return false;
    nums.sort((a, b) => a - b)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            return true
        }
    }
    return false;
};

// console.log(containsDuplicate([1,2,3,1]));
// console.log(containsDuplicate([1,2,3,5]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
