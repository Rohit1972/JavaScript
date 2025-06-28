const user = {
  username: "rohit",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`); // this keyword refer current context

    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();


// console.log(this);


// function chai() {
//     let username="rohit"
//     console.log(this);
// }
// chai()


// Arrow Function

// const chai = function () {
//     let username = "rohit"
//     console.log(this.username);
// }
//chai()


const chai = () => {
    let username = "rohit"
    console.log(this);
}

// chai()

//Explicit return 
// const addTwo = (num1, num2) => {
//     return num1+num2
// }
//console.log(addTwo(2,3))


//Implicit return

// const addTwo = (num1, num2) =>  num1+num2
// const addTwo = (num1, num2) =>  (num1+num2)


// console.log(addTwo(2, 3))



const addTwo=(num1,num2)=>({username:"rohit"})
console.log(addTwo(3,4));



