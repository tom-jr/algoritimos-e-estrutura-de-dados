


console.log('is balance: ', isBalance('(())'));//true
console.log('is balance: ', isBalance('(()))'));//false
console.log('is balance: ', isBalance('(())('));//false
console.log('is balance: ', isBalance('(())()'));//true
console.log('is balance: ', isBalance('(())))(('));//false
console.log('is balance: ', isBalance(')('));//false






function isBalance(input) {
    const inputs = input.split('');

    const stack = [];

    for (const item of inputs) {
        if (item != '(' && item != ')') throw Error('The input contains invalid characters');

        if (stack.length === 0 && item === ')') return false;

        if (item === '(') stack.push(item); else stack.pop();
    }
    return stack.length === 0;
}

