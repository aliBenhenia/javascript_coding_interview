const isNum = (n)=>{
    if (typeof n == "number")
        return true;
    return false;
}
const checkInt = (n)=>{
    if (n % 1 == 0)
        return true;
    return false;
}
console.log(checkInt(34));

