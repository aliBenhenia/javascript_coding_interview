// reverse string

const reverse = (s)=>{
    const newData = s.split("").reverse().join("");
    console.log(newData);
}
reverse("Geeks for Geeks")