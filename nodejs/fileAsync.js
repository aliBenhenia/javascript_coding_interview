import fs from "fs"
fs.readFile("./ht","utf-8",(err,data)=>{
    if (err) console.log("err man")
    else
        console.log(data);
        fs.readFile("./d","utf-8",(err,data)=>{
            if (err) console.log("err man")
            else
                console.log(data);
        })
})
console.log("end");