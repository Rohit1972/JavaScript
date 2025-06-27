//singleton
// Object.create


//object literals

const mySym=Symbol("key1")  // declare symbol


const jsUser = {
    name: "Rohit",
    "full name": "Rohit Kumar",
    [mySym]:"mykey1", // use symbol in object 
    age: 22,
    location: "Hamirpur",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Tuesday"]
    
}

console.log(jsUser.email)
console.log(jsUser["email"]);

console.log(jsUser["full name"]);

console.log(jsUser[mySym]); //access symbol


jsUser.email = "rohit@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "rohit@gmail.com"
console.log(jsUser);



jsUser.greeting = function () {
    console.log("Hello JS user");
}

jsUser.greeting2 = function () {
    console.log(`Hello JS user,${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greeting2());





