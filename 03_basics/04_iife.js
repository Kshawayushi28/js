// Immediately Ivoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


//to remove global scope pollution iife is used

/*
(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})()
*/

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('ayushi')