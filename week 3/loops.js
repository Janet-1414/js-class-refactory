for (i = 0; i <= 5; i++) {
  console.log(i);
}

// for (initialization; condition; increment/decrement):for loops
//initialize; if(condition){code if true}
//for, for--of, for--in, forEach(), while, do--while
const products = ["chair", "table", "copboard", "wardrobe"];
for (i = 0; i < products.length; i++) {
  console.log(`items${i + 1}: ${products[i]}`);
}

//while (condition ie stock availability){code if condition is true; increment/decrement}
let stock = 20;
while (stock > 0) {
  console.log(`selling item -- stock left is ${stock}`);
  stock--;
}

let payment;
let totalDue = 10000;
do {
  order = Number(prompt(`Enter payment(Total UGX is: ${totalDue}); `));
} while (payment < totalDue);
alert("your payment has been received");
stock--;
