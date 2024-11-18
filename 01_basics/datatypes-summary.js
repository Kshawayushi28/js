// Primitive

// 7 types: String,Number,Bollean,Null,Undefined,Symbol,BigInt

// const score=false
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
userEmail=undefined;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

// const bigNumber=3454892734104195734n

// Reference type  (Non primitive)

// Array,Objects,Functions
const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"Ayushi",
    age:20
}

const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);
console.log(outsideTemp);
console.log(scoreValue);
console.log(anotherId);
// Do objects and web events to master in javascript

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ******************************************************************************

// Stack(Primitive),Heap(Non-Primitive)

let myYoutubename="ayushishaw.com"

let anothername=myYoutubename
anothername="chaiaurcoffee"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user!ybl"
}

let userTwo=userOne

userTwo.email="ayushi@google.com"

console.log(userOne.email);
console.log(userTwo.email);