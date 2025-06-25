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



// ***************  Operations ******************

let value = 3
let negValue= -value
console.log(negValue)
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);



let str1 = "hello"
let str2 = " rohit"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log(1 + "2" + 3)
console.log(1 + 2 + "3");
console.log("1" + 2 + 3);

console.log(+true); //1
console.log(+""); //0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++ ;
console.log(gameCounter);