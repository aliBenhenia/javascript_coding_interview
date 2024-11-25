function multply(x)
{
    return (function(y){
        return (x * y);
    })
}
console.log(multply(3)(10));