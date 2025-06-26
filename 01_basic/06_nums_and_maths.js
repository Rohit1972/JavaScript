const score = 400
console.log(score);
const balance = new Number(100) //explicitly defines the datatype
console.log(balance);

console.log(balance.toString().length); 
console.log(balance.toFixed(2));


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));   //change neagtive in to positive
console.log(Math.round(4.3)); // give round off value

console.log(Math.ceil(4.2));  // it picks upper value like in this example 4.2 is taken then the output is 5 

console.log(Math.floor(4.2)); // It picks lower value like in this example 4.2 i staken then the output is 4

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // The output is always lies between the 0 and 1 

console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 


// random give value in between 0 and 1 to avoid this we add + 1 to provide range we can multiply by min and max +1 and after that add min for output
