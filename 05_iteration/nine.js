const muNums = [1, 2, 3, 4]


const initalValues = 0
const myTotal = muNums.reduce((acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
    
}, initalValues)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price:299
    },
    {
        itemName: "java course",
        price:3299
    },
    {
        itemName: "python course",
        price:4299
    },
    {
        itemName: "C course",
        price:5299
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(priceToPay);