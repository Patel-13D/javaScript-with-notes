const userEmail = [] 

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN     BigInt ek datatype che

//truthy values
// "0", 'false', " ", [], {}, function(){}

//.length thi array ni length check krse
// if (userEmail.length === 0) {            //check Array is Empty
//     console.log("Array is empty");
// }

// const emptyObj = {}                

// if (Object.keys(emptyObj).length === 0) {    //check object is Empty  object.keys()-> object ni keys no array bni n avse
//     console.log("Object is empty");
// }

// false==0==''

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10            //5
// val1 = null ?? 10            //10(jo value aavi hoy to value return krse ny to null)
// val1 = undefined ?? 15         //15(jo value aavi hse to value return krse ny to undefined)
val1 = null ?? 10 ?? 20            //ek krta vghare value avi hoy to 1st value assign krse

console.log(val1);

// Terniary Operator             //condition check kre

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")