const shoopingCart = [    {name:'shoe', price:1200,},
{name:'shirt', price:100,},
{name:'pant', price:200,},
{name:'belt', price:1000,},
];

function totalCost(products){
    let sum =0;
    for(let i =0; i < products.length; i ++){
        const product = products[i];
        sum = sum+product.price;
        console.log(product);
    }
    return sum;
}
const expense = totalCost(shoopingCart);
console.log(expense);