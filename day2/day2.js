//  Today day2 in js we explore the data types in js 
// is recomended to check the md file first ...

// data type main main two types hain lets code and understand the first type ==>>

//  Primitive data types 

// number (int and float values , float value decimals hain in programming we call them float values )

let num = 100 

let num1 = 200 

let numf = 21.99

let numN = -1000

let numfN = -10.29


console.log("1) NUMBERS ")
console.log("INT data type values (positive value)  => ",num,'\n')
console.log("INT data type values (negative value) => ",numN,'\n')
console.log("FLOAT data types values (positive value) => ",numf,'\n')
console.log("FLOAT data types values (negative value) => ",numfN,'\n')


// NOTE -- now most important think how to check the type of  
//  using the typeof 
console.log("type of variable => ",num,typeof(num),'\n')
console.log("type of variable => ",numN,typeof(numN) ,'\n')
console.log("type of variable => ",numf,typeof(numf),'\n')
console.log("type of variable => ",numfN,typeof(numfN),'\n')

// these all are in the number class ! its easy ton understand , sare int and float number in js , inka data type hai 'number'  


console.log()
// BigInt (very large integers)
// bigint huge integers ke liye hota hai (normal number limit ke beyond)
//  note that we add the 'n' at the end of the number 
let bign = 100111122237783324083423434234n 
console.log(bign,"\n type is =>> ",typeof bign)

console.log()
// String data type 
// string are the text data or the alphabet data inside the '' single quotes and double " " and lets code now 
// note in js we have only '' and " " quotes strings not the triple if you know about the python then you understand , k mai kiya batane ki kosiss kra raha hun but now lets goooo with two strings ... 


// single '' 
let strS = 'Hello'

//   NOTE i use the ` ` backtick to console the text and varibles using the ${} inside the backtick  its useful the most .. 
console.log(` Single quotes value  ${strS} and its type is =>> ${typeof strS} `)
console.log()

// Double  " "

let strD = " linux ! "
console.log(` Double quotes value  ${strD} and its type is =>> ${typeof strD} `)
console.log()

// we can use the " " string to write the long string text ... try it ... 

// these both are belong from the string data type so dono ka type same hai .. 

console.log()
//  Boolean (true/false)
// Boolean = sirf 2 values: true or false

let a = true 

console.log(`type of value => ${typeof a } and value => ${a}`)
console.log()
// don warry about this if else  !! 
if (a == true){
    console.log("ITs true !! helloo")
}
else{
   console.log("its false   ): ")

}

// i explain the if else code !! 
// now mera var a jis key value mai true hai if mere a key value == true hai to mere console mai mera code print kr do age nhi hai ton else ka code console krdo 
// ager main true ki jagah pr false krdu ton ?? try it ..... 

// i cover the if and the operators !!! leter 


// NUlL  
// null means nothing yeahh!! it is :)

let n = null 
console.log(`\n  value => ${n} type of value is => ${typeof n}`)

