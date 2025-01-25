const useremail="ayushi.ai"
// const useremail=""
// const useremail=[]

if(useremail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}



// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values
// "0"  0 is inside string,'false'," "  space us given,[],{},function(){}

/*
if(useremail.length===0){
    console.log("array is empty");
}
*/

const emptyobj={}

if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}

/*
false==0  ->  true
false=='' ->  true
0==''     ->  true
*/

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15

val1=null??10??20
console.log(val1);

//Terniary Operator

// condition?true:false

const iceteaprice=100
iceteaprice<=80?console.log("less than 80"):console.log("more than 80")

