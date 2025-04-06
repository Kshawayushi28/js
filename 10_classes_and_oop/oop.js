const user={
    username: "ayushi",
    loginCount: 0,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const data = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.getting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this       // Implicitely Defined
}

const userOne = new User("ayushi",12, true)
const userTwo = new User("ChaiAurCode",11,false)
console.log(userOne.constructor);
// console.log(userTwo);

// Uses of new keyword
 
// Step-1 new  empty object is created
// Step-2 constructor function is called
// Step-4 this keyword is injected 
// Step-4 we get it in function