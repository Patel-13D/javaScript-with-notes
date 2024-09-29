// singleton -> consturctor(object.create) thi bnava va ma ave(literals thi declare kre to singleton ny bne)
// Object.create

// object literals 

const mySym = Symbol("key1")

                           // object ma key ane value bnne define kri skay
const JsUser = {           //const JsUser{} -> object create krva (literals no use kri n) 
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                 // [mySym]->symbol ma convert krse otherwise string j btavse(interviwe)
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)           //access -> [] ane . bnne thi thy ske
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)              //value ma change ny kri skse
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){             //function declare
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //${} ``-> string interprutation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());