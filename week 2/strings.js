//strings are data types used to store words
//They are created by putting in double quotes ("")
let firstName = "Janet"
let lastName = "Naturinda"
let fullName = firstName + " " + lastName
console.log(firstName, lastName, fullName)



let sentance = "This is"
sentance =sentance+ "a sentance"
console.log(sentance)

// long literal strings
//concept:writing strings that span multiple lines often using literals or concatenation for readability
let longString = "This is a very long string that spans multiple lines" +
    "and are continous here for demonstration purposes"
console.log(longString)



//using tempelate literals for multi line strings
let multiline =    `This is a very long string
that spans multiple lines 
without needing concatenation`
console.log(multiline)

//Escape squences
//concept special characters in strings prefixed with a backslash to represent characters like quotes, new lines ec
let quote = "Janet,\"Hello baby\"";
console.log(quote)

let newLine = "first line\nsecond line";
let tabbed = "Columns\tColumns2";
console.log(newLine)
console.log(tabbed)
/////////////////////////// Key take away is back ticks are a way to go



//template strings
//string interpolation using back ticks
let name = "Janet"
let age = 21
let greeting = `Hello my name is ${name} and i am ${age} years old.;`
console.log(greeting)

let poem = `roses are red
violets are blue
Javascript is fun
and so you are`
console.log(poem)



//common string methods
//console.log(text.upperCase())


//embedded expressions
price = 400000;
quantity = 4000;
let total = `The total is ${price * quantity} shs.;`
console.log(total);