//dates


let myDate = new Date() // Date is object in javascript

console.log(myDate.toString()); //Thu Jun 26 2025 17:27:16 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); //Thu Jun 26 2025

console.log(myDate.toISOString()); //2025-06-26T11:57:16.109Z

console.log(myDate.toJSON());//2025-06-26T11:57:16.109Z

console.log(myDate.toLocaleString()); //6/26/2025, 5:27:16 PM

console.log(myDate.toLocaleDateString());//6/26/2025


// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

// let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate1.toLocaleString());//1/23/2023, 5:03:00 AM

// let myCreatedDate1 = new Date("2023-01-14");
// console.log(myCreatedDate1.toLocaleString()) //1/14/2023, 5:30:00 AM


let myTimeStamp =  Date.now()
// console.log(myTimeStamp);
// console.log(myDate.getTime());

console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getDate());


newDate.toLocaleString('default', {
    weekday: "long",
   
})


