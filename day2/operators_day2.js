// Expressions $ operators in js 
// >> a fregment of code that produces a value is called an expression. every value written literally is an expression for ex ;- 99, 'string' , 1000.1111 etc 


// Operators in js 
// 1) we code and understand the arithmetic operators what it is ? 

// console.log("\n Arithmetic Operators ==> ")
// console.log(`Addition 100 operator(+) 33 = ${100 + 33}    \n`)
// console.log(`Subtraction 100 operator(-) 30 = ${100 - 30} \n`)
// console.log(`Multiplication 10 operator(*) 2 = ${10 * 2}    \n`)
// console.log(`Exponentiation 100 operator(**) 3  = ${100 ** 3}    \n`)
// console.log(`Division 100 operator(/) 2 = ${100 / 2}    \n`)
// console.log(`Modulus 100 operator(%) 2 = ${100 % 2}    \n`)

// what is the idff between / and % ?? 

// now to more operators the most used 
// ++ increment 
let a = 5 
console.log(`a value before Increment ++ => ${a}`)
// increament the value but it increment value with one or yeah it mostly uesed inside the loop we explore it later.... just know the concept ....
// a ++  // post increment 
// console.log(`a value after Increment ++ => ${a}`)
// a ++ 
// console.log(`a value after Increment ++ => ${a}`)
// a ++ 
// console.log(`a value after Increment ++ => ${a}`)
// a ++ 
// console.log(`a value after Increment ++ => ${a}`)
// a ++ 
// console.log(`a value after Increment ++ => ${a}`)
// a ++ 
// console.log(`a value after Increment ++ => ${a}`)

// but its not the good way to increment the value we , hammne ek ek value ko increment krna pard raha hai to ager muje  10 ka increment chaahiye to kise karuga es trah say ton bilkul nhi we han on more operators that helps to increment the values but first lets code the decrement OPR

// decrement 
// a -- 
// console.log(`a value after Increment ++ => ${a}`)
// a -- 
// console.log(`a value after Increment ++ => ${a}`)
// a -- // post decrement ... 
// console.log(`a value after Increment ++ => ${a}`)
// a -- 
// console.log(`a value after Increment ++ => ${a}`)

// this is how use the increment and decrement !! 
// now we have the another think in the increment and decrement OPRs
// ++ a   // this is the pre increment 
// console.log(`a value after Increment ++ => ${a}`)
// -- a // pre decrement  
// console.log(`a value after Increment ++ => ${a}`)

// we will explore it more about this in the loops .. 

// Assignment OPRs
// the first assignment OPR use used the most is =  equal or equal to OPR

let a1 = 10 
let b1 
a1 = b1 

// lets see the Increment Assignment Opr
// ham ese two ways main use kr sakte hain .. 

// 1) 
let num = 100
console.log(`Before Increment Assignment Opr (+=) ${num}`)
num += 20
console.log(`After Increment Assignment Opr (+=) ${num}`)

// so ager maine one by one increment nhi krn hai to ham use krte hain this += opr ... 

// 2) way to use this opr
num = num + 40 
console.log(`Increment Assignment Opr (num=num+<value>) ${num}`)
// this is the another way to do the same think .. 



// now the Decrement Assignment opr 
console.log(`Before Decrement Assignment Opr  ${num}`)
num = num - 50
console.log(` Decrement Assignment Opr (num=num - <value>) ${num}`)
num -= 30 
console.log(`Decrement Assignment Opr (-=) ${num}`)

// or same jisse hame increment decrement assignment oprs ko use kiya we can use same with
//  * =  multiple assignment 
// / = assignment  
// % = modulus assignment 
// ** = exponentiation 
console.log()

let num1 = 20 
console.log(`Multiplication assignment opr ${num1}`)
num1 *= 2 
console.log(`Multiplication assignment opr ${num1}`)
// we can use all these but am not do that ... 
console.log()



// Comparison OPR
// yeh sab operators use hote hai values ko compare krne k liye use hote hai .. 
//  = =  equal to 
let user = "sham"

// this is the equal to opr
if(user == "sham"){
    console.log("wellcome sir !! ")
}
else{
    console.log("access denied")
}


//  not equal to  !=
let passwd = "sham12233"
if(passwd != "sham12234"){
    console.log("your are logged in !! ")
}
else{
    console.log(" your are not logged in ") 
}

// === equal value and type 
// in this operator hamm value k sath sath uska type bhi compare krte hain ex:-
let num2 = "code"
let num3 = '100'

if (num2 === num3){
     console.log("this value and the data type ")
}
else{
     console.log("Not same the value and the data type")
}
// the value type is same but the value inside the string is now same , pahle num2 main maine quotes main ek string value di hai ek text value, num3 main maine qoutes main ek number value di hai ek int ...  
console.log(" ")

let num22 = 33
let num33 = 33

if (num22 !== num33){
    console.log("we using the !== opr")
}else{
    console.log("value and the type is matched")
}

let s1= '122'
let s2 = '122'

if(s1 === s2 ){
    console.log("value and type is matched !!! 1")
}else{
    console.log("not matched 0")
}

/// its simple you know !! 

// > greater and >= greater then equal to 
if(10 > 0){
    console.log("10 is greater then 0 yeahhh you know ")
}

let nn = 100
let nn1 = 101
if(nn1 >= nn){
    console.log("this nn1 is greater then")
}
// this opr you understand in the loop then this code so don warry if you do ..
// es main hota yeh hai k ager uss say greater hai to bhi condition true hai ager equal hai ton bhi so yeah you learn this in the loop the most 

// < less then and <= less then equal to 
if (0 <= 10){
    // change the value of 10 with 0 and see the output again and you got the point ?
    console.log("this is the funnnyyy")
}

// last opr is ternary operator we cover this is the conditional statements, us main yeah jyda acche say explain hoga .. 



// Now the last operators is logical operators 

// && logical AND 
let t = true 
let tt = false 

if (t == true && tt == false ){
    console.log("this line running .... 1")
}
else{
     console.log("this line is not running 0")
}
// using the AND OPR ager dono condition true hai ton block body code run hoga nhi to nhi ... mera t = true hai or tt - false hai or main likha hai k ager t = true hai or tt= false hai ton console run krdo nhi to else ka console run hoga .... 



// logial OR  || opr
// es mai ager dono mai say ek condition true hai ton code run hoga us block ka .. ex;- 

let st= "str"
if (st === 'str' || st == "100"  ){
     console.log('running...... 1')
}else{
    console.log("not..... running... 0")
}

// so konsa console run hoga?? 
//  note the think 
/*
   10 is operand  
    |
    |
    10 + 10 = 20 
 
    and the + is operator = is assignment opr 
*/