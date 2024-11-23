const checkpalindrome = (s)=>{
    let  str = s.toLowerCase();
    let rev = str.split("").reverse().join("");
    return (str === rev);
}

console.log(checkpalindrome("123321"));

