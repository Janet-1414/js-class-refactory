//comparison operators
let x = 5;
(x == 8);
(x != 8);
console.log(x == 8);
console.log(x != 8)


let numOne = 10;
let numTwo = 5;
let isGreaterThan = numOne > numTwo;
console.log(isGreaterThan);


////logic operators
const age = 20
const hasID = true;
if (age && hasID){
  console.log("access granted");
}
else {
    console.log("access denied")
}

const width = 20;
const height = 5.8;
let result = width >=18 || height < 5;
console.log(result)

const measurement = height < 6;
console.log(!result);



const paymentStatus = "paid";
if (paymentStatus === "paid") {
    console.log("Thank you for your payment")
}
else {
    console.log("payment is still pending")
}



