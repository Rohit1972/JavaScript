function calculateCartPrice(...num1) /* Rest operator*/{
    return num1
}

console.log(calculateCartPrice(200, 400, 500))

function calculateCartPrice(val1,val2,...num1) /* Rest operator*/{
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) //[ 500, 2000 ]


const user = {
    username: "Rohit",
    price:199
}


function handleObject(anyobject) {
    console.log((`Username is ${anyobject.username} and price is ${anyobject.price}`));
}

// handleObject(user)

handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));