// Scope of variables means where can a variables be used/accessed? 

// 1) Global Scope 
// a variables declared outside the function/block us usually global scope variable.

let globalvar = "hello!"  // this is the global scope variable 

function hello(){
    // ham global scoped variables ko use kr sakte hain in the script anywhere ! 
     console.log(`${globalvar} Admin..`) // works !
}


console.log()
//  calling the function 
hello()

console.log()
console.log(globalvar)

// function scope or local scope 
// Variables declared inside a function live only inside that function.

function function1(){
     let name1 = 'python-in-local' //function or local scoped... 
     console.log(name1)      
}

// now we cannot access the local scoped variables outside the function, yeh us function ka local variable hai or us main he accessable hai.. 

console.log()
// console.log(name1)
// ReferenceError: name1 is not defined

//  when function ends, its local variables are not available outside.


// 3) Block scope (let and const)
// A block is anything inside { ... } like if, for, while.

if(true){
    // let msg = 'hello inside block ! '  // yeh run hoga 
    //  note maine let use kiya hai ager main var use kro ton ?

    // comment the var variable to run the let  ! 
    var msg = 'hello its var inside the block !'
    console.log()
    console.log(msg)
    // now  ReferenceError nhi show hoga ? why ? 
    // var behaves differently: it is function-scoped, not block-scoped. 
    // var ignores block boundaries, so it “leaks” out of the block (within the same function/global).
    //    Prefer let/const. Avoid var in new code.
}

console.log()
console.log(msg) // ❌ ReferenceError

/**
 * Scope chain (lexical scoping) — the “search system”
When you use a variable name, JavaScript searches like this:

Check current block/function
If not found, go one level up (outer function)
Keep going up until global
If nowhere found → ReferenceError

 * 
 */

// global variable
const a = "global! Hello!! "


function outer(){
    // outer variable, local scope variable
    const b = "outer Hello!!"   
    
    // inner function 
    function inner (){
        //  const c = "inner ! Hello !! "
        const c = "inner ! Hello !! "

        //  console all the variables 
        console.log(a,'\n')
        console.log(b,'\n')
        console.log(c,'\n')
    }
    // inner function ends here !! 

    // calling the inner function inside the outer function
    inner()
}
// calling the outer function 
outer() 

// now the flow or accessing the variables, kuch esse hai! sb se pahale us ne apne function or block main find krna hai ager nhi mila then outside the scope and ager us wich bhi nhi milya tn checking the global scope maine to function k ander functions create kiye hain means nested function so its easy to understand the flow of the variables search systems ..


// Shadowing (same name inside)
// You can create a variable with the same name in an inner scope. This is called shadowing.

let name = "Outside-variable";

function test() {
  let name = "Inside-variable";
  console.log(name); // Inside
}

test();
console.log(name); // Outside
// NOTE nner name is a different variable; it hides the outer one inside that scope.