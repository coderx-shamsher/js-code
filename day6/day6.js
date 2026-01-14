// code of strings 

// strings 
// 1) single quotes strings 
// we can define this type of strings inside the '' quotes 

let name1 = 'CoderX'
console.log()
console.log(`this is the example of the Single quotes string \n   (${name1}) and type is ==> "${typeof (name1)}" `)
console.log()

// Double quotes strings 
// we can define the Double quotes strings inside the " " quotes 
let name2 = "coderx"
console.log(`this is the example of Double quotes string \n   (${name2}) and type is ==> "${typeof (name2)}" `)

// note this is  ` ` backticks and we used the most because es ki help say ham string k ander varaibles ko pass kr sadte hain or print krva sakten hain.. 

let backtick = `backtick-string`
console.log()
console.log(`This is (${backtick})  \n its type is ==> (${typeof (backtick)}) `)

// thats how  we can print every varaibles inside the string or normal strings main yeh possible nhi haiii .. 

function heloo() {
    console.log("this is hello function!! ")
}

console.log()
console.log(`This function in backtick we console !! ${heloo()} `)

// we can also do this .. 


// string length 
// using the .length property ! 
let text = 'javascript in the backend'
console.log()
console.log("The String ==> \n", text, "\n String length => \n", text.length)

// NOte using the \n we can create a new line or space or we can also use the console.log() this !! 

// INdexing concepts 

let string = 'CODERX'
console.log()
console.log(`Indexing..... \n String => ${string} \n The length of String => ${string.length}`)

// how to access the first character of the string using the indexing method 
// yeh index number kaise assigned hote hain see the md file and search on the internet 

console.log()
console.log(`1)  Character ==> ${string[0]}`)
console.log(`2)  Character ==> ${string[1]}`)
console.log(`3)  Character ==> ${string[2]}`)
console.log(`4)  Character ==> ${string[3]}`)
console.log(`5)  Character ==> ${string[4]}`)
console.log(`6)  Character ==> ${string[5]}`)


// this is the possitve indexing.. 
// now the negative indexing 
// if we use the negative indexing in js then this happend 

console.log()
console.log(`Negative Indexing --> ${string[-1]}`)
console.log(`Negative Indexing --> ${string[-2]}`)

// Both undefined... 
/// but if we use the .at() function 
// es function ki help say we can do both positve and negative indexing 
console.log()
console.log("Negative Indexing using the .at() function.. ")
console.log(`Index No. 6) => ${string.at(-1)}`)
console.log(`Index No. 5) => ${string.at(-2)}`)
console.log(`Index No. 4) => ${string.at(-3)}`)
console.log(`Index No. 3) => ${string.at(-4)}`)
console.log(`Index No. 2) => ${string.at(-5)}`)
console.log(`Index No. 1) => ${string.at(-6)}`)

// if you see we can print the reverser string using the negative indexing .. or

/** Indexing 
 * 
 *  Positive --- started form 0 
 *  
 *   "hello" ---> es breakdown krte hain 
 *   es string mein 5 char's hain.. length of the string 
 * 
 *   h --> 0 
 *   e --> 1 
 *   l --> 2
 *   l --> 3
 *   o --> 4 
 * 
 *  or ek simple exmple easy to understand 
 *     0  1  2  3  4 
 *     h  e  l  l  o
 *    
 *  negative ----- yeh ulti indexing hai means -1 es ka  end index number hai or first depend krta hain length of the string par so we can calculate the string negative index number 
 *   
 *  
 *      c   o   d   e   r   x 
 *     -6  -5  -4  -3  -2  -1 
 * 
 * 
 *      0   1   2   3   4   5    ----positive 
 *      C   O   D   E   R   X  
 *     -6  -5  -4  -3  -2  -1     ---Negative  
 */
console.log()
console.log("Positive Indexing with .at() ")
console.log(`Index No. 0) => ${string.at(0)} `)
console.log(`Index No. 1) => ${string.at(1)} `)
console.log(`Index No. 2) => ${string.at(2)} `)
console.log(`Index No. 3) => ${string.at(3)} `)
console.log(`Index No. 4) => ${string.at(4)} `)
console.log(`Index No. 5) => ${string.at(5)} `)


// indexOf() function finding Positiions 

let string1 = '@thebest#1'
console.log()
console.log(`Indexing finding.. `)
// first step .... 
console.log(`Index number -=> ${string1.indexOf('#')}`)
console.log(`Index number -=> ${string1.indexOf('@')}`)
console.log(`Index number -=> ${string1.indexOf('b')}`)
console.log(`Index number -=> ${string1.indexOf('1')}`)
console.log(`Index number -=> ${string1.indexOf('t')}`)
console.log(`Index number -=> ${string1.lastIndexOf('t')}`)

// console.log(`${string1.indexOf('@')}`)
// console.log(`${string1.indexOf('b')}`)
// console.log(`${string1.indexOf('1')}`)


// so es ki help hai kisi bhi character ka index pata kr sakte hain 
// NOte ager string mein same characters hai like i have two t's so use this function lastIndexOf()
console.log()
console.log(`Matching the index number ---->> `)
// last step... 
console.log(string1.at(8))
console.log(string1.at(0))
console.log(string1.at(4))
console.log(string1.at(9))
console.log(string1.at(7))
console.log(string1.at(1))

console.log()

// we can first find the index and then do this so make your console easy readable 

console.log(`Index number -=> (${string1.indexOf('@')})`, `string at the index number (${string1.at(0)})`)
console.log(`Index number -=> (${string1.indexOf('t')})`, `string at the index number (${string1.at(1)})`)
console.log(`Index number -=> (${string1.indexOf('h')})`, `string at the index number (${string1.at(2)})`)
console.log(`Index number -=> (${string1.indexOf('e')})`, `string at the index number (${string1.at(3)})`)
console.log(`Index number -=> (${string1.indexOf('b')})`, `string at the index number (${string1.at(4)})`)
console.log(`Index number -=> (${string1.indexOf('e')})`, `string at the index number (${string1.at(5)})`)
console.log(`Index number -=> (${string1.indexOf('s')})`, `string at the index number (${string1.at(6)})`)
console.log(`Index number -=> (${string1.indexOf('t')})`, `string at the index number (${string1.at(7)}`)
console.log(`Index number -=> (${string1.indexOf('#')})`, `string at the index number (${string1.at(8)})`)
console.log(`Index number -=> (${string1.indexOf('1')})`, `string at the index number (${string1.at(9)})`)
