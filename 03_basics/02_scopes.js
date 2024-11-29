// *********global and local scope********

// let a=10
// const b=20
// var c=30

// {}->scopes


// var c=300
let a=300

if(true){
    let a=10
    const b=20
    // var c=30
    // c=30
    // console.log("INNER: ",a);
    function addNum(){

    }

}

/*
for(let i=0;i<array.length;i++){
    const element=array[i];
}
*/

// console.log(a);
// console.log(b);
// console.log(c);

// *********Nested Scope**********

function one(){
    const username="ayushi"
    function two(){
        const website="youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username="ayushi"
    if(username==="ayushi"){
        const website=" youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// ***************interesting****************

console.log(addone(5));
function addone(num){
    return num+1
}


addtwo(5)          // throws error
const addtwo=function(num){
    return num+2
}


