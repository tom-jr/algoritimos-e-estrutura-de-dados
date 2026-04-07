function findEvenNumberDigits(nums: number[]) {
    let countEven = 0;
    for(let num of nums) {
        if (`${num}`.length % 2 == 0) {
            countEven++
        }
    }
    return countEven;
 }

 console.log(findEvenNumberDigits([555,901,482,1771]));