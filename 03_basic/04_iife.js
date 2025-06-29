// function chai() {
//     console.log("DB COnnected");
// }
// chai()

//IIFE Example - TO Overcome the golbal scope pollution
(function chai() {
    //named IIFE
    console.log(`DB Connected`);
})();  // ends the IIFE with Semicolon to end the code or function

((name) => {
        //simple or unmaned IIFE
    console.log(`DB Connected two ${name}`);
})('rohit')
