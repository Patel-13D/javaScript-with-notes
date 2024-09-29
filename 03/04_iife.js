// Immediately Invoked Function Expressions (IIFE)
//ghani var global scope na pollution thi problem thay to te global scope na variables (je kai pn declaration hoy)che ene hatava mate
//je function immediately execute thy jaay

(function chai(){               //()() ma lkhvanu 
    // named IIFE               
    console.log(`DB CONNECTED`);
})();                          // ; jaruri che ahiya

( (name) => {                    //IIFE using arrow ( ()=>{})()
    console.log(`DB CONNECTED TWO ${name}`);
} )('diya')

