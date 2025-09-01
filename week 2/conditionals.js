///////////////types of control flow statements
/////////////loops
//for loop
//while loop
// do-while loop

//////////////////conditional statements
//if statement
//if-else statement
//if-else-if-else statement
//nested if statement
//switch statement
//ternary operator
//if statement with logical operators in conditions

/////////// exception handling
//debugging
//try--catch

/////////////////transfer control
//return
//break
//continue

// let age = prompt("please enter your age");
// age = Number(age);
// isNaN();

// if (isNaN(age) || age < 0) {
//   window.alert("please enter valid age");
// } else {
//   if (age >= 18) {
//     window.alert("you are an adult youcan vote");
//   } else {
//     window.alert("you are a minor, you cannot vote");
//   }
// }

///switch statement

let paymentType = prompt("Enter payment method:(Flexipay,Cash,Bank)").toLowerCase();
switch (paymentType) {
  case "flexipay":
    //write code when expression === value1
    alert("verify your flexipay account before continuing");
    break;
    case "cash":
    //write code when expression === value2
    alert("process cash at the counter");
    break;
    case "bank":
    //write code when expression === value3
    alert("verify your bank details before payment");
    break;
  default:
    alert("unknown method please check again");
}
