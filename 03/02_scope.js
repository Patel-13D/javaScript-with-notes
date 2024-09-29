//var c = 300             //avoid to use var => because apde c ni value scope in bahr aapi che ane c ni biji value scope ni undr rakhhi che to te scope na undr vali value e scope sidhu j simit rehti nthi(je bov motu error bnavi ske)
let a = 300               //Global scope
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){                  //nested function(function na und function)
    const username = "diya"

    function two(){
        const website = "youtube"
        console.log(username);             //child function can access the parent's variables
    }
    //  console.log(website);            //website is not defined

     two()                               //child function can access the parent's variables

}

//  one()                      //one() fuctionCall thase pehla ema two() functionCall thase pachhi two na scope ma jse

if (true) {
    const username = "diya"
    if (username === "diya") {
        const website = " youtube"
        //  console.log(username + website);      //ena pachhi aa execute thse
    }
    //  console.log(website);                //pehla aa execute thse
}

//  console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

//HOISTING -> declaration pela access ny kri skay

 addTwo(5)                                //ahiya error avse km k apde value ne variable ma hold kri che
const addTwo = function(num){             //function using variable (HOISTING)
    return num + 2
}
