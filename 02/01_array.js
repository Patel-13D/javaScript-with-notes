// array

const myArr = [0, 1, 2, 3, 4, 5]                             // javaScript ma array copy operation 'Shallow copy' create krse
const myHeors = ["shaktiman", "naagraj"]                     //Shallow copy->copy whose properties  share the same references (je pn changes kre e original array ma pn change thase)
                                                             //Deep copy -> a copy whose properties do not share the same references
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)                                          // value add kre
// myArr.push(7)                                          
// myArr.pop()                                            //last value n delete kre

// myArr.unshift(9)                                       //array na start ma value add thse
// myArr.shift()                                          // first value n delete kre

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));                        // exist ny krti hoy eni value no index puche to output -> -1 aavse

// const newArr = myArr.join()                         //  array to string convert krse

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);                              

const myn1 = myArr.slice(1, 3)            //returns a copy of a section of an array"slice ma copy apse array na joiye etla part ni""
console.log(myn1);

console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)          
console.log("C ", myArr);               // splice -> original array n manipulate krse(jetlu joiye e kadhi dese original value mathi pachhi output print kravse)
console.log(myn2);
