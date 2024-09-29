
function sayMyName(){                    //function etle code n ek package ma rakhvu(eg. Ek code n 5 var print krvu) 
    console.log("D");
    console.log("I");
    console.log("Y");
    console.log("A");
   
}

// sayMyName()                     //sayMyName->function ka reference , sayMyName()->execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){         // addTwoNumbers(parameters)

    // let result = number1 + number2
    // return result                             //return thi value koi variable ma store thase
    return number1 + number2                    // return no use krya pchhi kai pn biju function kaam ny kre (even console.log() pn print ny thase)
}

const result = addTwoNumbers(3, 5)            //addTwoNumber(argument)->fuction call kre tyare argument add krvana aave em kevay

// console.log("Result: ", result);           //Result: undefined


function loginUserMessage(username = "sam"){
    if(!username){                             //value true hoy to j code ma jaay 
        console.log("Please enter a username");
        return                                //return no use thyo to  niche nu kai print thase ny
    }
    return `${username} just logged in`             // value return kri
}
 
// console.log(loginUserMessage("hitesh"))         // return krel value n print kryu or koi variable ma store kryu             
// console.log(loginUserMessage("hitesh"))         // value override thai kevay


function calculateCartPrice(val1, val2, ...num1){        //...-> rest operator(for passing the multiple value)(jyare bov bdhi value ek jgya e add rakhvani hoy)
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  //val1=200 ,val2=400, output = [500,2000]

const user = {
    username: "diya",
    prices: 199
}

function handleObject(anyobject){                      //object ne function ma pass krvu
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({                               // function ma object pass kryo (uor na jevu j pn biji rite kryu)
    username: "sam",                         //direct print thay jse
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]                        // je argument lkhyu hoy ene hammesha return kravanu
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));