function mul(n)
{
   return ( function(n1)
    {
        return ( function(n2)
            {
                return (n * n1 * n2);
            })
    })
}
console.log(mul(4)(3)(4))