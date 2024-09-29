// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;                           // break : control flow n break kre   
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:                               //The default statement is executed if 'no case constant-expression value is equal to the value of expression' 
        console.log("default case match");
        break;
}