// singleton
// Object.create

// object literals

const mySym=Symbol("key1")
const JsUser={
    name:"Ayushi",
    "full name":"Ayushi Shaw",
    [mySym]:"mykey1",
    age:19,
    location:"West Bengal",
    email:"ayushishaw123@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])

JsUser.email="ayushichatgpt@gmail.com"
// Object.freeze(JsUser)
JsUser.email="ayushimicresoft@gmail.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js User,${this.name}`)
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());