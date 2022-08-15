const shoopingCart = [    {name:'shoe', price:1200, quantity:5},
{name:'shirt', price:100,quantity:5},
{name:'pant', price:200,quantity:5},
{name:'belt', price:1000,quantity:5},
];
function totalCost(products){
    let sum =0;
    for(let i =0; i < products.length; i ++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum+productTotal;
        //console.log(product);
    }
    return sum;
}
const expense = totalCost(shoopingCart);
console.log(expense);