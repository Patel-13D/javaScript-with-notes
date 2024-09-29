// if                          //true hoy to j code execute thse

// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40 ){            //conditional code
//     console.log("less than 40");
// } else {
//     console.log("temperature is greater than 40");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, === ((strict equal)data type pr check krse), !==(negative sign check kre)

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);  //power is not define(block scope)


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {        // && bdhu true hovu joiye
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {  // || koi pn sachu hoy to true aave
    console.log("User logged in");
}