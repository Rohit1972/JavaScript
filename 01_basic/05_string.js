const name = "rohit-hc"
const repoCount = 50

// console.log(name + repoCount+" value")    old way


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String("rohitrkd") // beacuse string is an object so we cna access its with index value 


console.log(gameName[0]); // output : h
console.log(gameName.__proto__)  // it returns an object and you can also check its object into the browser console

console.log(gameName.length); // output : 8
console.log(gameName.toUpperCase()) // output : ROHITRKD

console.log(gameName.charAt(2)); //output : h

console.log(gameName.indexOf('t'))// to check the character position

const newString = gameName.substring(0, 4)
console.log(newString); // output : rohi  and substring ignores negative value



const anotherString = gameName.slice(-8, 4)
console.log(anotherString); //output: rohi

const newStringOne = "   rohit   "
console.log(newStringOne);
console.log(newStringOne.trim());  //output:rohit ,trim removes all the whitespaces

const url = "https://rohit.com/rohit%20kumar"

const url1=url.replace('%20', "-")
console.log(url1);


console.log(url1.includes('dogra'));


console.log(name.split("-") );
