function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
}

// sayMyName()

/*
function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
*/

function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // console.log("ayushi");
    // return result
    // console.log("ayushi")          does not print this as after return nothing gets printed
    return number1+number2
}


// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")

// addTwoNumbers(3,null)
const result =addTwoNumbers(3,5)       // stored in variables

// console.log("Result",result);

 /* 
 if-else condition statement:
 
    undefined->false value 
    ""->false value 

    !->not symbol 
    false->true
    true->false
*/

function loginUserMessage(username="sam"){
    if(username===undefined){            
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ayushi"));
// console.log(loginUserMessage("ayushi"))     // value overlapped

function calculateCartPrice(val1,val2,...num1){         //...->rest or spread operator
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"ayushi",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,700,500,1000]));