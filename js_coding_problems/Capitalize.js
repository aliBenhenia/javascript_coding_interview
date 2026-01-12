const isLowerCase = (char) => {
    return char === char.toLowerCase();
};

const capitalizer = (str) => {
    let isNewWord = true; // Start assuming we're at the beginning of a word
    let capitalized = ''; // Use empty string, not template literal
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (isNewWord && char !== ' ') {
            // Capitalize the first letter of a new word
            capitalized += char.toUpperCase();
            isNewWord = false;
        } else {
            capitalized += char;
        }
        // If we encounter a space, next character could be start of new word
        if (char === ' ') {
            isNewWord = true;
        }
    }
    
    return capitalized;
};
const capitalizer2 = (str) => {
    return str
        .split(' ')
        .map(word => {
            if (word.length === 0) return '';
            return word[0].toUpperCase() + word.slice(1);
        })
        .join(' ');
};

console.log(capitalizer2(` hello mr ahmed `)); 
// Output: " Hello Mr Ahmed "

let str = "hello";








// You CANNOT do this:
str[0] = "H";  // ✗ Won't work! No error, but nothing changes
console.log(str); // Still "hello"






// notes
// You MUST do this: becouse string immutabale cant be chnged or drefrenced...
str = "H" + str.slice(1);  // ✓ Create a NEW string
console.log(str); // Now "Hello"