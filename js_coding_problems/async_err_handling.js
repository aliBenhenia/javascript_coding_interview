const getPlayers = async()=>{
    try
    {
        const res = await fetch("https://cataas.com/cat");
        return res;
    }
    catch(err)
    {
        console.error(err);
        return err;
    }
}
// console.log()
getPlayers().then((res)=>{
    console.log(res.url)
})