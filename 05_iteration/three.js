
//for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}



const greeting = "Hello World!"
for (const greet of greeting) {
    console.log(greet);
}


//Maps: hold unque value in key value pair and remember order of insertion

const map = new Map()
map.set("IN", "India")
map.set("USA","United State of America ")

console.log(map);


for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,":",value);
}



const myObject = {
    'game1': "NFS",
    'game2':'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key,":",value);
// } // Not iteratable


