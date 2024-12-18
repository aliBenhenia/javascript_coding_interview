exports.data = (num=7)=>{
    if (num >= 0 && num <= 10)
        return num;
    return -1;
}

exports.name = this.data();
console.log(process)