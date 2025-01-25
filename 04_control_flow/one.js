//if

/*
if(true){

}

if(false){

}

if(2==2){

}

if(isUserloggedIn){

}
*/

const isUserloggedIn=true
const temperature=41
/*
if(temperature===40){
    console.log("less than 50");
}else{
    console.log("greater than 50")
}
console.log("execute");
*/

/*
2<=2
3!=2
2=="2"
*/

// <,>,<=,>=,==,!=,===

const score=200

/*
if(score>100){
    let power="fly"
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);
*/

const balance=1000

// if (balance>500) console.log("test"), console.log("test2");            

//dont't write like this,immature code

/*
if(balance<500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}else if(balance<900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}
*/

const userloggedin=true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true

if(userloggedin && debitcard && 2==3){
    console.log("allow to buy course");
}

if(loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in");
}
