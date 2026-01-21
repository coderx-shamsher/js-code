// OBjects in js 
// its collection of key-value pairs 
// object define inside the { } 

// lets create object 

// 1) way to create object 

let team ={
     id1  : "0001",
     person1_name : "coderx",
     role: "backend-dev",

     id2:"0002",
     person2_name: "codery",
     role:"frontend_dev" 
}


// this is the most common way to create a object in js 

// 2) way to create an object using the 
// Object.create()

let users = Object.create({
      username1 : "bob",
      username2 : "jim",
      username3 : "joy"
})


// 3) way using the Constructor 
const admin_users  = new Object({
     admin_user1 : "admin_X",
     admin_user2 : "admin_Y",
     admin_user3 : "admin_ruka"
})



// last 4) way  using the function constructor (Old way )

function objects (name,age){
       this.name = name
       this.age  = age  
           

     }

// now create object keys and values using this 
let member1 = new objects("shang lee",24)
let member2 = new objects("yami",24)
let member3 = new objects("leo",24)

// this function method, bhot complexity create krta hai... so make sure use onther easy methods jo bhot jada useful hai or use hote hain

// this is old and not so used in js just 3 methods are more to work with .... 



// How access values from objects 
// 1) using the key names 
// using the  objectname.keyname  es method say ham har key ki value ko access kr sakte hain ... 
let value1 = admin_users.admin_user1
console.log()
console.log(`Object value1 => ${value1}`)

// 2 ) way using the objectname['keyname']  es method say bhi ham values ko get kr sakte hain..  
let value2 = admin_users['admin_user2']
console.log()
console.log(`Object value2 => ${value2}`)



// 3) using the loop 
// forin loop
console.log()
console.log('Object values accessing using the loop --> ')
for (const keys in users) {
     // if (!Object.hasOwn(object, key)) continue;
     
     const element = users[keys];
     console.log(`${keys} == > ${element}`)
}


// now lets see some built-in object methods 
// ager sirf keys get krni hai from object 

// Object.keys() function , es function mein ap apna object name pass kro or we can get all your keys  
let keys = Object.keys(member1)
console.log(`\n keys only ==> `,keys) 