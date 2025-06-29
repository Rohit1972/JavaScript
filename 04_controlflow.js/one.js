// if 
const isUserLoggedIn = true
const temperature=41

if (temperature < 50) {
    console.log("Less than 50");
} else {
    console.log("temperature greater than 50");
}
if (isUserLoggedIn) {
    console.log("Hi, this if block run succesfully ");
}

if (3 != 2) {
    console.log("Run successfully")
}


if (2==="2") {
    console.log("Executed");
}

//Comparison Operator
// <,>,<=,>=,==,!=(not equal),===,!==


const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}


//shorthand notation but not in used

const balance = 1000
//implicit scope 
if (balance > 500) console.log("test"),
    console.log("test2");

//Nesting 
if (balance < 500) {
    console.log("Less than 500");
} else if (balance<750) {
    console.log("less than 750");
} else if (balance < 950) {
    console.log("Less than 950");
} else {
    console.log("Less than 1200");
}


//Example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail=true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

