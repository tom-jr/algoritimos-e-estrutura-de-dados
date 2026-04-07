function sortedSquares(nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }
    return nums.sort((a, b) => a - b);
}

const res = sortedSquares([-4, -1, 0, 3, 10]);
console.log(res);
