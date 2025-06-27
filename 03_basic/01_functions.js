
function sayMyName() {
   console.log("r");
   console.log("o");
   console.log("h");
   console.log("i");
   console.log("t"); 
}



// sayMyName()



// function addTwoNumbers(number1, number2)/*parameters*/ {
//     console.log( number1 + number2)
// }


// function addTwoNumbers(number1, number2)/*parameters*/ {
//     let result = number1 + number2
//     return result
// }


function addTwoNumbers(number1, number2)/*parameters*/ {
    return number1 + number2
}

const result = addTwoNumbers(3, 4) //arguments

// console.log("Result: ",result);



function loginUserMessage(username="sam") {
    // if (username=== undefined) {
    //     console.log("Please enter a username");
    //     return
    // }
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}


console.log(loginUserMessage()) // if you are not passing any value then sam can be console 
