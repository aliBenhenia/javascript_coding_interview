const test ={
    2 : `ahmed`,
    true : 111,
     age: 30,
    city: 'New York'
}
for (let prop in test)
{
    console.log(`${prop} -> ${test[prop]}`)

}