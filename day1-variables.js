//  NOTE --- read the readme of day1-variabels the code using the readme ess k sath or better understanding milegi k code main kiya ho raha hai ....  >>> HAppy learning .....  

/// ## Variables in js 

//  Creating variables in JavaScript: let, const, and var

// JavaScript has three main keywords to declare variables:

// let → value can change later (re-assignable).

// const → value cannot be re-assigned (locked reference).

// var → older style, has confusing rules; avoid at the start.

// creating variables using the var keyword 
var a = 100 
// var is older but in the modern js code we avoid it 

// print on the console 
console.log()
console.log("This is the value of a => ",a)

// note use the node command to run the code !!! 
//  NOte ;- let (use when the value changes) 
// ager value ko change krna hai to use let keyword
// using the let we can reassign the values 
let b = 'code_breaker'
console.log()
console.log(b)

console.log()

let a1 = 10
console.log('\n',"The value is => ",a1)

a1 = a1 + 10     // its the assignment operation we learn more later 

console.log('\n', "Value is increased now => ",a1)


/// const 
// use the const when you should now re-assign the values 
console.log()
const value = 1000
console.log(value)

// or if you reassign the value then ;- 
// value =+ 10 
// console.log(value)
   //TypeError: Assignment to constant variable.


//    NOte -
//  Declaration we just create a variable 
// kissi new variable koi name dena or create krna 

let variable ; // declaration, hammne value put nnhi ki variable main  

console.log(variable)

// if we console so we see the undefined type means your variables koo values assign nhhi hai its the default in js 

// Assigment - putting a value in it 
// declared variables koi values denaa..

variable = "Sham" // assignment or assigning a value 

// if you do that with undefined variable
// let und 
let und 
let var1 = 'Hello'


// console.log(und + var1) //undefinedHello 



//  Primitive types (simple values)
// Examples: number, string, boolean, null, undefined
// i can cover more about this type of values of data types !! 

// number 
let a = 222

// string 
let st = "this is the string value"

// boolean 
let boolean = true

/// null 
let nl = null

// undefined 
let un = undefined 

// this is the most common used types of values and we can say data types i can explore it later 
// i can go step by step !! 


//  reference values 

// Array 
let array = [10,200,340,33,445]


// objects 
let obj = {
      name: "coderx",
      role: "code_breaker"
}

//  this is the other data type of reference values  also we cover it in detail about these all types one by one, maine just define kiya hai k yeh sb data type most used hain in the js 



//  NOTE there are some rule how to define the variable you must read the md file to understand for now i give the code example here 

// ✅ Valid names
let userName = "Ali";
let _count = 1;
let $price = 99;
let user2 = "Ayesha";

// ❌ Invalid names
// let 2user = "No";    // cannot start with a digit
// let my-name = "No";  // hyphen not allowed
// let let = 5;         // reserved keyword