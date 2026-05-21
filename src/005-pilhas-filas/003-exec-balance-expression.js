console.log(checkExpression(')'));//false

console.log(checkExpression(']'));//false

console.log(checkExpression('}'));//false


console.log(checkExpression('()'));//true

console.log(checkExpression('([])'));//true

console.log(checkExpression('([{}])'));//true

console.log(checkExpression('{}[]()([])'));//true


console.log(checkExpression('{}[]()([]))'));//false





function checkExpression(data) {
    const stack = [];

    for (let i = 0; i < data.length; i++) {
        const element = data[i];

        if ((element === ')' || element === ']' || element === '}') && !stack.length) {
            return false;
        }

        if (areInverse(stack[stack.length - 1], element)) {
            stack.pop();
        } else {
            stack.push(element);
        }
    }
    return stack.length === 0;
}

function areInverse(p1, p2) {
    switch (p2) {
        case ')':
            return p1 === '('
        case ']':
            return p1 === '['
        case '}':
            return p1 === '{'
        default:
            break;
    }
}