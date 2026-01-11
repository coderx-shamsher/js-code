// what is function ? 
// A function is a block of code designed to perform a particular task.
// its block of code that is executed when we called or invoked the function its reuseable and easy to maintainable 
// or function also with and without parameters its depends on the requirement 

// syntax of function 
// function functionName(parameters){
//     // code to be executed 
// }    

// function without parameters
// in the js we can create a function with the use of function keyword and then we give the function name. 
function myhello_function() {
    console.log()
    console.log("Hello, welcome to the world of functions!");
    console.log()
}

// we create simple hello function without parameters we will see how to call the functions 

myhello_function() // calling the function

// function with parameters
function sum(num1, num2 ){
      console.log()
      console.log(`The sum of the ${num1} + ${num2} is :  ${num1 + num2}`);
}

console.log()
// calling our function with name of the function and we passing the arguments to the function 

/** 
 * 
//   Parameters are the names listed in the function definition.
// Arguments are the real values passed to the function.

*/
sum(5,10) // calling the function with arguments 5 and 10
console.log()
sum(20,30) // calling the function with arguments 20 and 30
console.log()
sum(100,200) // calling the function with arguments 100 and 200
console.log()


// function with return statement
// what is return statement ? 
// The return statement ends function execution and specifies a value to be returned to the function caller.
// why we use return statement ?
// We use return statement when we want to get some value from the function after execution of the function


function sum_with_return(num1, num2){
    return `sum of ${num1} + ${num2} is : ${num1 + num2}`
}

// now if we simply call the function it will not print anything because we are not using console.log to print the return value
sum_with_return(50,70) // calling the function

// to print the return values we need to use console.log lets see how to do 

let result = sum_with_return(50,70) // calling the function and storing the return value in a variable 
console.log()
console.log(result) // printing the return value


// function expression
// A function expression is a function that is assigned to a variable.
// Function expressions can be named or anonymous.  
// why we use function expression ?
// We use function expressions when we want to create a function and assign it to a variable for later use.

const multiply = function (num1, num2){
    return `The multiplication of ${num1} * ${num2} is : ${num1 * num2}`
}

console.log()
// we can do this think or 
console.log(multiply(5,6)) // calling the function expression and printing the return value 
console.log()
let result_multiply = multiply(10,20) // calling the function expression and storing the return value in a variable
console.log(result_multiply) // printing the return value

// what  we do we have seen so far ? 
// 1. function without parameters
// 2. function with parameters
// 3. function with return statement
// 4. function expression 


// Now mostly used function in js is arrow function 
// Arrow function
// Arrow functions are a more concise syntax for writing function expressions.
// They are always anonymous and change the way this binds in functions.

const printname = (youname) => {
    console.log()
    console.log(`Hello, ${youname}! this is an arrow function! `);
}

console.log()
let name1 = 'shamsher'
// calling the arrow function 
printname(name1)


let array1 = [1,2,3,4,5,6]
function test (arr){
   let sum = 0
    for (const element of arr) {
         sum = sum + element
         console.log(sum)
      }
   
}

// 
console.log()
test(array1)

console.log()
// Problem code for practice 
// Q1: What does this return? Fix it so it returns value.
function brokenAdd(a, b) {
  TODO: return a + b  // solved ...  
//   console.log(a + b);
}
const r = brokenAdd(10, 3);
console.log("Result:", r);

console.log()

// Q2: Make a function isAdult(age) returning true if age >= 18 else false
// TODO:  done
 

const agecheck =  (age) => {
      if(age >= 18 ){
           return `${age} ${true}`
      }
      else{
           return `${age} ${false}`
      }

}
console.log()
let age = 10 
console.log(agecheck(age))
age = 40
console.log()
console.log(agecheck(age))
age = 18
console.log()
console.log(agecheck(age))


// // Q3: Make function demoScope() where you create a local variable and print it.
// Then try to print that local variable outside (commented) to see error.
// TODO:  done 

function demoScope(){
      let local = 'hi I am local! '
      console.log('\n',local,'\n')
}
console.log()
demoScope() 
console.log(local)   //
// ReferenceError: local is not defined