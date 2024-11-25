const reversString = (s)=>{
    let str = "";
    let len = s.length - 1;
    while (len >= 0)
        str+=s[len--];
    return (str);
}

console.log(reversString("rfwrd"))