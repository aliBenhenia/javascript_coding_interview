// stpes
// in first iteration i will capitalize it , if find space i will change the flag , if flag false will capitalize and chnge it again and so one

const capitalizer = (str)=>{
    let capit = [];
    let flag =  false;
    let i = 0;
    while (i < str.length)
    {
        if (str[i] == ' ')
            flag = true;
        if (i == 0 && (str[i] >= 'a' && str[i] <= 'z'))// first time
        {
            capit.push(str[i] - 32);
        }
        else if (flag  && (str[i] >= 'a' && str[i] <= 'z'))
        {
            capit.push(str[i] - 32);
            flag = false;
        }
        else    
            capit.push(str[i]);
        i++;
    }
    return str;
}
console.log(capitalizer("hello me ss sude qwedjb qwdhbq"))