const anagramsCheck = (s1,s2)=>{
    if (s1.length != s2.length)
        return false;
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i]) == false)
            return false;
    }
    return true;
}
// console.log(anagramsCheck("mary", "army"))

// second imple
const anagramsCheck2 = (s1,s2)=>{
    let a = s1.toLowerCase().split("").sort().join("");
    let b = s2.toLowerCase().split("").sort().join("");
    return (a == b);
}
anagramsCheck2("mary", "army")


// const s = "hello world";
// console.log(s.includes("he "))// str str in string c lib