const anagram = (s1, s2) => {
    const clean1 = s1.toLowerCase().replace(/[^a-z]/g, "");
    const clean2 = s2.toLowerCase().replace(/[^a-z]/g, "");

    if (clean1.length !== clean2.length) return false;

    const counter = {};

    // store counts of each character
    for (let char of clean1) {
        counter[char] = (counter[char] || 0) + 1;// count character repetation
    }

    for (let char of clean2) {
        if (!counter[char]) return false; // not enough of this letter
        counter[char]--;
    }

    return true;
};

console.log(anagram("listen", "silent")); // true
console.log(anagram("aab", "aba"));       // true
console.log(anagram("aab", "abb"));       // false
