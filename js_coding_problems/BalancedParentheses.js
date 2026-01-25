function isValidParentheses(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let char of s) {
        if (pairs[char]) { // إذا كان قوسًا مفتوحًا
            stack.push(char);
        } else { // إذا كان قوسًا مغلقًا
            const top = stack.pop();
            if (pairs[top] !== char) {
                return false;
            }
        }
    }
    console.log(stack) // shoudl empty
    return stack.length === 0;
}

// اختبار
console.log(isValidParentheses("(())")); // true
console.log(isValidParentheses("({[]})")); // true
console.log(isValidParentheses("({[})")); // false
console.log(isValidParentheses("(())"))