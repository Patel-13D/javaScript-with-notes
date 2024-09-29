const score = 400
// console.log(score);

const balance = new Number(100)               // output ma direct type  number btavi dese
// console.log(balance);

// console.log(balance.toString().length);        // string type bni jse jena thi string ni bdhi additional properties use kri ske
// console.log(balance.toFixed(1));               // decimial pchhi ketla number aava joiye e btave

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));       //returns a string,round of kri n ketla value pr focus krvanu e,interesting propety che dhyan thi use krva pdse

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  //10,00,000  'en-IN'-> as indian standards 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));           negative value positive ma convert thase
// console.log(Math.round(4.6));        simaple round of 
// console.log(Math.ceil(4.2));     //5    ceiling etle round of kre tyare top vali value lese
// console.log(Math.floor(4.9));    //4    lowest value lese round of kre ema    
// console.log(Math.min(4, 3, 6, 8));      
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());   // random values avse 0 to 1 ni vache
console.log((Math.random()*10) + 1);  // jena thi minimum value 1 avse 0 ny
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

console.log(Number);
