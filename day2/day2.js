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


// symbol (unique identifier)
// symbol unique IDs banane ke kaam aata hai, even if description same ho.

// maine same values put kri hai Symbol() function main 
let id1 = Symbol("id1")
let id2 = Symbol("id1")

// now we console kiya hai or value same hai 
console.log(id1) 
console.log(id2)  

// but lest check with 
if(id1 == id2){
    console.log("Same id's ")
}
// what its give nothing ?? lets try with else 
else{
    console.log("yeah id's are uniques not same !!")
}

// so what we see in the output !! try and understand 
// so with the symbol() we can create a unique values then looks same but not same jise hammne create ki thi values !   


console.log()
// >>> non primitive or objects and arrays 

// Object (collections + real-world structures)
// Object = key-value pairs. Think: “profile card” (name, age, city).

let object = {
     name: "coderX",
     class: "S class",
     role: "Pentester"
}

// object is pair of keys and values 
// we can access the full object and by key we can access the values but i can cover the object in detailed later so lets console the full object now 

console.log(object)
console.log(`type of object => ${typeof object}`)
console.log()

// let access the one value using the key name 
console.log(`My name is => ${object.name}`)

// Arrays (also object type)
// Array = ordered list.
// array main ham mixed values or same type of data (homogenious data ) bhi store kr sakte han 

let array = [100,200,3330,330,33444]

console.log(`the all values of array => ${array}`)

// i the objects we have the pair key and value we can get the values using the key , in the array we have index numbers to get the items inside the array we explore more about this later ... 
// but lets print the first and last value

console.log(`the first value of array => ${array[0]}`)
console.log(`the last value of array => ${array[4]}`)

// i explore more ...


// Primitive vs Object (copy behavior)
// Primitives copy by value (independent copy), objects/arrays copy by reference (shared).
// this is must be the advance for understanding so i explain it but its simple i think

// first i create a1 variable then i give a value 5 then maine ek b1 banya or us ku a1 ki value assign krdi ...  b1 = a1 b1 nu a1 ki value assign ho gyi 

let a1 = 5 
console.log(a1)
// but jab maine a1 ki value ko + 10 kya ton value on increment ho gyi but jo value b1 nu assign kri thi or we say b1 ne copy kri thi uski default value bhi change ho gyi ... 
a1 = a1 + 10
console.log(`${a1} \n`)

let b1 = a1    // assigning the value of other variable 
console.log(b1)
// now jdo main value print kiti tn same ayi then maine b1 ki value ko + 5 kiya or print kita kuj khass huya nhi but ..... remember the assigned value of a1 to b1 is 5 ok 
b1 = b1 + 5 
console.log(b1)
