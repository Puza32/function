const phones= [
    { name:'Samsung',camera:12,storage:'32gb',price:36000, color:'silver'},
    { name:'Iphone',camera:12,storage:'32gb',price:89000, color:'silver'},
    { name:'OPPO',camera:12,storage:'32gb',price:5000, color:'silver'},
    { name:'Samsung',camera:12,storage:'32gb',price:89000, color:'silver'},
    { name:'Samsung',camera:12,storage:'32gb',price:50000, color:'silver'}
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price  < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);