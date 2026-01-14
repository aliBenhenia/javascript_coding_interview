class Product{
  constructor(name, price)
  {
    this.name =  name;
    this.price = price;
  }
  settName(persone_name,price){
    this.name = persone_name;
    this.price = price;
  }
}
const p1 = new Product(`phone`, 1000);
const p2 = {};
p1.settName.call(p2,`laptop`,7777777)
p1.settName.apply(p2,[`laptop`,7777777])// same as call but only use Array
const callback = p1.settName.bind(p2,`laptop`,7777777)
callback();
console.log(p2.name)
console.log(p2.price)