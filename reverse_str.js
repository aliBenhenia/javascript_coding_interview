// reverse string

const reverse = (s)=>{
    let len = s.length;
    let res = '';
    while (len--)
        res += s[len];
    console.log(res)
}
reverse("Geeks for Geeks")