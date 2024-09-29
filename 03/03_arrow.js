const user = {
    username: "diya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);            //current context(values) ne refere krva mate->this
        console.log(this);
    }

}

//   user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()      //here it's a current context

// console.log(this);            //{}->this ni value ahiya(global object pass kre), browser ma this ni value-> WINDOW object thase

//  function chai(){
//     let username = "diya"         //function ma this no use ny thay (object ma thase)
//     console.log(this.username);   //function na undr(global environment ma) this ne print kre to bov value btase eni
//  }

//  chai()

// const chai = function () {
//     let username = "diya"
//     console.log(this.username);  //undefined
// }
// chai()

const chai =  () => {              //arrow function  () => {}
    let username = "diya"
    console.log(this);
}

//  chai()

// const addTwo = (num1, num2) => {           //explicit return
//     return num1 + num2
// }

//  const addTwo = (num1, num2) =>  num1 + num2   //implicit return (return lkhvani jarur ny mde maani levama aave k value return thy che)

// const addTwo = (num1, num2) => ( num1 + num2 )  // {} hoy to return lkhva j pdse

 const addTwo = (num1, num2) => ({username: "diya"})  //object ne retun krva ( ma wrap krva j pde)


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]  //arrow function loops ma kaam avse

//  myArray.forEach(() => {})