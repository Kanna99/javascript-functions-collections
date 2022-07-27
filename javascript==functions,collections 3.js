data = '{"name":"Toyota Rav4","engine":"2.5L","price":3200}'

let obj=JSON.parse(data)

console.log(obj["name"]);//mkyong
console.log(obj.name);//mkyong

console.log(obj["address"].strretAddress);
console.log(obj.address.streetAddress);

console(obj.phoneNumber[0].number)