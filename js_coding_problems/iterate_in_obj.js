const test ={
    name : `ahmed`,
    id : 111,
     age: 30,
    city: 'New York'
}
for (let prop in test)
{
    console.log(`${prop} -> ${test[prop]}`)

}