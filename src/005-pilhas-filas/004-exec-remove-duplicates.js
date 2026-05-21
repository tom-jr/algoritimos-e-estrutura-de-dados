console.log('abbaca --> ',removeDuplicate('abbaca')) //ca
console.log('azxxzy --> ',removeDuplicate('azxxzy')) //ay
console.log('empty --> ',removeDuplicate('')) //


function removeDuplicate(data) {
    stack = []
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(element)
        }
        
    }
    return stack.join('');
}