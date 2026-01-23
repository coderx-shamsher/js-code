// Arrays in js  
// its mutable data type because we can change it like strings 

// 1) way to make array 

let array1 = ['heloo', 'arrays', 'js']
console.log()

// console the entire array pura array print kiya 
console.log(`This is array =>> `, array1)
// console.log(array1)

// type 
console.log(typeof (array1))  // object in js arrays ka type object show hota hai.. 

// 2) new Array()   -->>  ek Constructor hai 
let number = new Array(1, 2, 3, 4, 5)

console.log()
console.log('another array')
console.log(number)
console.log('type of another array')
console.log(typeof (number))


// now the 3) way a empty array 
let empt = []
console.log()
console.log(`this is empty arary`, empt, typeof (empt))
console.log()


// now talk about the array type object keo show ho raha hai 

// array 
let arr = [102, 334, 444]
let obj = { n1: 'v1', n2: 'v2' }

console.log()
console.log('typs of array and object -->')
console.log('Array ==>', typeof (arr), '\n', 'Object ==>', typeof (obj))

// Arrays are special objects with numeric keys (0,1,2...) + length property + array methods.
/// NOTE Arrays  are some special objects in js that have object and arrays features crazyyy!!!! 
/** Arrary behind the scenes :- 
 * [1,2,3] = {0:1, 1:2, 2:3 } --> length:3
 * 
 *  special objects with arrays superpowers 
 */

// isArray() 
let new_array = [1, 211, 22, 333, 44, 55]
console.log()
console.log(new_array, typeof (new_array))

let new_arr = Array.isArray(new_array)
console.log()
console.log(new_arr, typeof (new_arr)) // type boolean aya keo k yeh boolean values return krta hai.. 

// Array. ek constructor hai jis ki help say array create hota hai isArray() ek checker hai jo check krata hai k array hai k nhi 

// Array.of () of for creating perfect arrays 
let testarr = Array.of(1, 2, 2, 3, 4, 5)    // using the number int, create new arrary 
console.log()
console.log(testarr, typeof (testarr))


// from string or object like , ton ek array create krna ! Creates an array from an iterable object.
// using the .from() 
let stringarr = Array.from('helloLinux')
console.log()
console.log(stringarr, typeof (stringarr))

/// now typeof testarr and stringarr is object but you know what is the seen now 

// now lets do some more thinks 
function Array_checker(arr1, arr2) {
    let testarr1 = Array.isArray([])
    // console.log(testarr1)
    if (arr1 != testarr1 || arr2 != testarr1) {
        arr1 = Array.isArray(arr1)
        arr2 = Array.isArray(arr2)
        if (arr1 == testarr1 && arr2 == testarr1) {
            console.log(`Array one => `, arr1, 'This is an Array')
            console.log(`Array two => `, arr2, 'This is an Array')
        }
        //    console.log(arr2)
    }
    //    else if (arr2 != testarr1 ){
    //        arr2 = Array.isArray(arr2)
    //        console.log(arr2)
    //    }
    // if (arr1 == testarr1 && arr2 == testarr1 ){
    //     console.log(`You enter two Arrays that are the Arrays `)
    // }else{
    //     console.log('you enter one wrong typed array !! ')
    // }

}

console.log()


console.log(`Manual checking.... `)
console.log(Array.isArray(stringarr))
console.log(Array.isArray(testarr))


console.log('\n', 'Array Checking function is running..... it takes two arrays as paramters')
// function calling 
Array_checker(testarr, stringarr)



// so we have a constructor Array. with the array checking function isArray() we can use as combination to checking the array 


// now we will see ! how to access the values of an Array 

// array literal
let testarr2 = ['hello','my']

console.log()
console.log(`Accessing the Values of an array using the Indexing methods..`)

//Indexing methods  ---- positive indexing 
console.log()

let firstele = testarr2[0]
let secondele = testarr2[1]
console.log(`This is the Array Element 1) => ${firstele}`)
console.log(`This is the Array Element 1) => ${secondele}`)

// now checking the length of my array 
console.log()
console.log(`Length of my array => ${testarr2.length}`)


// ARRAY OPERATIONS ---->>
// now lets add more elements inside my array !  
// ager ap ne python ki hai to yeh ton alag hai 

// push() function or method ! add to end 
// how to use 
/**
 *  array.push(value/element)
 *  
 */

// adding new value 
testarr2.push('Name')

let thdele = testarr2[2]

console.log()
console.log(`Adding new element within an array => ${thdele}`,'\n',`The length of an array => ${testarr2.length}`)

// es ki help say we can push elements at the end of array 

// now  remove from end --> pop 
// yeh jis element ko remove krta hai use return krdeta hai  from end 

let pop1 =  testarr2.pop()
console.log('\n',`This element is rmeoved from my array (from end) => ${pop1}`,`\n      Now the length of arry => ${testarr2.length}`)

// now remove from start using the shift() 
let deltstr = testarr2.shift() 
console.log('\n',`This element is rmeoved from my array (from start) => ${deltstr}`,`\n      Now the length of arry => ${testarr2.length}`)



// add to start  using the unshift() 
// yeh return krega length of an array after adding 
// let stradd = testarr2.unshift('Hi 👋')

testarr2.unshift('Hi 👋')

let strnew = testarr2[0]
console.log('\n',`Adding new element at start => ${strnew}`,`\n      Now the length of arry => ${testarr2.length}`)



// thats alll yr 


// insert elements using index number 
console.log()
console.log(`Before ---> `)
console.log(`Index 0 element is => ${testarr2[0]}`)
console.log(`Index 1 element is => ${testarr2[1]}`)
let index1 = testarr2[0] = "Linux "
let index2 = testarr2[1] = "Admin!"
console.log()
console.log(`Changing the elements of an array using index number =<>>>`)
console.log(`Before ---> `)
console.log(`Index0 =>> ${testarr2[0]}`)
console.log(`Index1 =>> ${testarr2[1]}`)


//  Negative Indexing  to get elements 
console.log()
console.log(testarr2)
// we cannot use the negative indexing like python exmple 

let n1 = testarr2[-1]
console.log(`Negative indexing -->`,n1) //we got the undefined now remember jb bhi negative yan positive indexing krni ho toh use this method 

// Negative indexing using the .at()
// we can do both let code. 
let nth1 = testarr2.at(-1) // -1 say ham last vali value ko get krege keo ? vese to yeh value last hai last the pov of postive indexing but in the negative its the first last value means yeh right to left carry krti hai
let nth2 = testarr2.at(-2)  

/*** 
 * 
 *    hello, this, is , the , linux 
 *      -5    -4   -3   -2    -1
 * 
 * just for understang
 */

console.log(testarr2)
console.log(`using the  0 index --> ${testarr2.at(0)}`)
console.log(`using the -1 index --> ${nth1}`)
console.log()
console.log(`using the 1 index --> ${testarr2.at(1)}`)
console.log(`using the -2 index --> ${nth2}`)
console.log()



// now to the get the index number of any elements inside an array 
// using the .indexOf()

// first lets add more elements to an array 
testarr2.push("hypr")
testarr2.push("arch")
testarr2.push("windows")
testarr2.push("debian")
console.log(testarr2)

// indexOf() --> yeh function ek string value mangta hai or hame ek index number return krta hai or vo postive number he hota hai.. return krna ... ager oh element present na ho to -1 return krega 
// ager apo kisi bhi element ka index pta krna hai to use this first 
console.log()
console.log(`index number is => ${testarr2.indexOf("hypr")}`)
console.log(`index number is => ${testarr2.indexOf("windows")}`)
console.log(`index number is => ${testarr2.indexOf("Admin!")}`)

// let see  add more elements at the start of the array 
testarr2.unshift("negative21")
// testarr2.unshift("negative32")
console.log(testarr2)
console.log()
// console.log(`index number is => ${testarr2.indexOf("")}`)
console.log(`index number is => ${testarr2.indexOf("negative21")}`)
testarr2.push("negative44")
console.log(`index number is => ${testarr2.indexOf("negative44")}`)


console.log()
// indexOf() with at()
console.log(`Getting the index of ${testarr2.at(-1)} ==> ${testarr2.indexOf("debian")}`)
console.log(`Getting the index of ${testarr2.at(-3)}   ==> ${testarr2.indexOf("arch")}`)
console.log(`Getting the index of ${testarr2.at(1)}  ==> ${testarr2.indexOf("Admin!")}`)


// let see more method to create array 

let arraynth1 = Array.of("alex","alan","apex",'masha',"natasha")
console.log()
console.log(arraynth1) 

// or we can also use 
let arraynth2 = new Array(11,222,334,556,554)
console.log()
console.log(arraynth2)


// now lets see the Array.isArray() vs instanceof 
let iarr = []
console.log(iarr instanceof Array)   // some times its give false info 
console.log(Array.isArray(iarr))
console.log()
// now 
let fakeArr = []
fakeArr.__proto__ = null
console.log(fakeArr instanceof Array) // yeh false show kr raha hai
console.log(Array.isArray(fakeArr))   // yeh true show kr raha hai 
console.log()

// using the 
let protoarr = []
protoarr.__proto__ = Array.prototype
console.log(protoarr instanceof Array)
console.log(Array.isArray(protoarr))

// array as object 
let objarr = Object.create(Array.prototype)
console.log(typeof(objarr))
objarr.push("value1") // its works as array ! 
console.log(objarr)
console.log()
console.log(objarr instanceof Array)
console.log(Array.isArray(objarr))    // this is true keo k hamne object.create() method main ek array prototype create kiya hai or vo ek object hai not an array

// now konsa use krna chaahie so always use the --> Array.isArray() ...

// NOTE Arrays are objects in js! type correctly shows object , no negative effect on usage. 
// Arrays are special objects with numeric keys (0,1,2...) + length property + array methods.
// ager app ne object.create ki help say array create kiya  hai to app bhi ese dekh sakte hain jise maine kia hai or print kiya hai us objectarr ko....
// Array = Object with numbers as keys
// [1,2,3] = {0:1, 1:2, 2:3, length:3}
// typeof sabko "object" bolta hai!
