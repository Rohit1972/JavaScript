let score = "33"
let scores="33abc"
console.log(typeof score);
console.log(typeof (scores));


let valueInNumber = Number(score)
let valuesInNumber=Number(scores)

console.log(typeof (valueInNumber));  //convert into number


console.log(valuesInNumber) //Nan not a number 
console.log(typeof valuesInNumber)


//"33" =>33
//"33abc" => NaN but type is number
// true =>1; false=>0
// "scvfdv"=> NaN


let isLoggenIn = 1
let booleanIsLoggedIn = Boolean(isLoggenIn)
console.log(booleanIsLoggedIn); // true


//1=> true; 0=>false
//""=>false
//"rohit"=> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
