const userEmail = "rohit@gmail.com";
// const userEmail = ""
// const userEmail=[]   check these one by one

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//falsy value

//false,0,-0,BigInt(0n),"",null,undefined,Nan

//truthy value

//"0",'false'," ",[],{},function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//NUllish Coalescing Operator (??):null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15;
val1=null??10??15

console.log(val1);


//Terniary Operator

// condition? true:false

const iceTeaPrice = 100
iceTeaPrice<=80?console.log("Less then 80"): console.log("More than 80");