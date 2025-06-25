// Primitive 

// 7 types : String ,Number, Boolean, Null , Undefined, Symbol, BigInt

const score = 100
const scoreValue=100.3


const isLoggedIn = false
const outsideTemp = null // type=> object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false



const bigNumber = 234567897654321345678654321n
console.log(typeof bigNumber);

//Javascript is a dynamically tyoed language 

// Non-primitive or Refrence

//Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]


let myObj = {
    name: "rohit",
    age:22
}


const myFunction=function () {
    console.log("hello world!");
}


console.log(typeof outsideTemp);




// ++++++++++++++++++++++++++++

// Stack ,Heap

// Stack => Primitive
//Heap=> Non-Primitve


//Stack example it gives copy 
let myYoutubeName = "rohitvlogs.com"

let anotherName = myYoutubeName
anotherName="rohitminivlogs"
console.log(myYoutubeName);
console.log(anotherName);


// heap eample it gives reference
let userOne = {
    email: "user@google.com",
    upi:"dsk@ybl"
}


let userTwo = userOne

userTwo.email="rohit@google.com"


console.log(userOne.email);
console.log(userTwo.email);
