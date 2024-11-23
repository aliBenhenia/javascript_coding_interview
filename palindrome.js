const checkpalindrome = (s)=>{
    let  str = s.toLowerCase();
    let rev = str.split("").reverse().join("");
    //Strings are immutable in JavaScript
    //To use reverse(), we must first convert the string into an array of its individual characters. The split('') method achieves this by breaking the string into an array of characters.
    return (str === rev);
}

// console.log(checkpalindrome("123321"));
let cc = "hello bro";

cc.split("").at(0) = '1'
console.log(cc)

