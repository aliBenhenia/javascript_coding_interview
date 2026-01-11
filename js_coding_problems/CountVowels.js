const CountVowels = (str)=>{
    let counter = 0;
    const str2 = str.toLowerCase();
    for (let i = 0; i<= str2.length;i++)
    {
        if (str2[i] === 'a' || str2[i] === 'e'|| str2[i] === 'i'|| str2[i] === 'u'|| str2[i] === 'o')
            counter++;
    }
    return counter;
}
console.log(CountVowels("swdhsagttaae"))