function mul(n)
{
   return ( function(n1)// anonymous function returned and child has access to outer func
    {
        return ( function(n2)// anonymous function returned and child has access to outer func
            {
                return (n * n1 * n2);// anonymous function returned and child has access to outer func
            })
    })
}
console.log(mul(4)(3)(4))