const missing_number = (nums) => {
    if (nums.length === 0) return null;
    
    const sorted = [...nums].sort((a, b) => a - b);
    const min = sorted[0];
    
    // Check each position
    for (let i = 0; i < sorted.length; i++) {
        const expected = min + i;
        if (sorted[i] !== expected) {
            return expected;
        }
    }
    // If all numbers are present
    return sorted[sorted.length - 1] + 1;
}

// unit tests
const tests = [
    { input: [1, 2, 4, 5], expected: 3 },
    { input: [2, 3, 4, 5], expected: 1 },
    { input: [1, 2, 3, 4], expected: 5 },
    { input: [4, 2, 1, 5], expected: 3 }, // Unsorted
    { input: [], expected: null }, // Empty
    { input: [5, 6, 8, 9], expected: 7 },
    { input: [10, 11, 13, 14], expected: 12 },
    { input: [-3, -2, 0, 1], expected: -1 }, // Negative numbers
    { input: [1], expected: 2 }, // Single element
];

console.log("Testing your function:");
tests.forEach((test, index) => {
    const result = missing_number(test.input);
    const passed = result === test.expected;
    console.log(`Test ${index + 1}: ${passed ? '✅' : '❌'} 
        Input: [${test.input}] 
        Expected: ${test.expected} 
        Got: ${result} \n`);
});