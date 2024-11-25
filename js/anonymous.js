
function test(a)
{
    return function (b){
        return function    (c){
            return a * b * c;
        }
    }
}

console.log(test(2)(3)(4))