// OBjects in js 
// its collection of key-value pairs 
// object define inside the { } 

// lets create object 

// 1) way to create object 

let team = {
     id1: "0001",
     person1_name: "coderx",
     role: "backend-dev",

     id2: "0002",
     person2_name: "codery",
     role: "frontend_dev"
}


// this is the most common way to create a object in js 

// 2) way to create an object using the 
// Object.create()

let users = Object.create({
     username1: "bob",
     username2: "jim",
     username3: "joy"
})


// 3) way using the Constructor 
const admin_users = new Object({
     admin_user1: "admin_X",
     admin_user2: "admin_Y",
     admin_user3: "admin_ruka"
})



// last 4) way  using the function constructor (Old way )

function objects(name, age) {
     this.name = name
     this.age = age


}

// now create object keys and values using this 
let member1 = new objects("shang lee", 24)
let member2 = new objects("yami", 24)
let member3 = new objects("leo", 24)

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
console.log(`\n keys only ==> `, keys)

// now lets get only the values without using the keyname 
// Object.values(objectname) , es function main apne object ka name pass kro or app get kr sakte ho all values 
console.log()
let valuesonly = Object.values(team)
console.log('  Values only ==> ')
console.log(valuesonly)
console.log()


// ager key-value pairs ko get krna hai ho use this method 
// Object.entries() function , es function main bhi object name pass krna hai.. 
let pair = Object.entries(team)
// Returns an array of key/values of the enumerable own properties of an object

console.log(pair)
console.log(typeof (pair))

// now kiya yeh object hai yan array ki hamne get kiya hai lets check 
console.log()
let obj = {}
// empty object 

// ham check kr sakte k array hai k object jo hame es function ne return kiya hai 
let ar = []
// empty Array

console.log(typeof (obj), typeof (ar)) // in js array ek object type show hote hain type console krne pr but at the same time yeah object nhi hote  let see the code example of this concept ---> 

console.log(Array.isArray(ar)) // ager es method say true return hoya means vo ek array hai ager same object par test karen to?
console.log(Array.isArray(obj)) // 
console.log()


// Array or Object ? 
if (Array.isArray(obj)) {
     console.log('a array')
} else {
     console.log('a object ')
}


// ager kisi object main koi property hai k nhi check krna hai to use this method 
// in keyword 
console.log()
console.log(team)
console.log()

// console.log(id3 in team) // esa krne c error aa sakta hai ..  

// use the 'property_name'  
console.log('id3' in team)  // false 
console.log('id2' in team)  // true ? 
console.log()

// how to create copy of a object 
const new_obj = Object.assign({}, users)
console.log(new_obj)  // es ne ek empty object bana k diya 
let a = new_obj.admin_user1
console.log(a)

// another method to do that 
let parentobj = {
     parent_name: "sahil",
     age: 35
}

console.log(parentobj)
// now using this parent object we can create a child object 
let child_obj = new Object(parentobj)

// adding child name 
child_obj.child_name = "babu"
console.log()
console.log(child_obj)
// child object apne parent object ki values koi bhi inharit krta hai ... 



// now how to add/delete/update  properties 
// adding new user in object 
console.log()
console.log(admin_users)

// add one new key value 
admin_users.admin_user4 = "admin_coderZ"

// check your update ... 
console.log()
console.log("new pair Added into object ==> ")
console.log(admin_users)
admin_users.admin_user5 = 'admin_mizuhara'
console.log()
console.log(`New pair added ==> `)
console.log(admin_users)


// how to update any value 
console.log()
console.log(admin_users)
console.log()

console.log('now the user => ', admin_users.admin_user4)
admin_users.admin_user4 = "admin_mami"
console.log('now the user => ', admin_users.admin_user4)
console.log()


admin_users.admin_user01 = admin_users.admin_user1
console.log(admin_users)
console.log()


// Delete , using the delete keyword  
// console.log()
console.log(admin_users)
delete admin_users.admin_user01
console.log(admin_users)


console.log()
console.log(" ===> Object Destructuring <=== ")
// Object Destructuring 
let usr = {
     n: "ronin",
     age: 15,
     nn: "jony",
     age1: 16
}

//basic destructuring 
let { n, age } = usr
console.log(n, age)


// rename key names 
let { n: boy1name, age: boy1age } = usr
console.log()
console.log(boy1name, boy1age)
console.log()

let { nn: boy2name, age1: boy2age } = usr
console.log(boy2name, boy2age)
// console.log(boy2age)
console.log()


// SPREAD Operator (...) - COPY + MERGE
let usr1 = {
      boy3name:"will",
      boy3age: 17,
      boy4name:"marco",
      boy4age : 18
}

// i have two object or muje onhye marge krna hai 
let merged_obj = {...usr, ...usr1}
console.log(`merged object here ==> `)
console.log(merged_obj)
console.log()

// copy + update 
console.log('Orignal object ===> ')
console.log(usr1)
console.log()
console.log('copy + updated object ===> ')
let updated_obj = {...usr1, boy5name:"john",boy5age:17}
// now usr1 object ki ek copy updated mai store hogi with  new pair updated 
console.log(updated_obj)


// functions inside the objects
const obj_function = {

     name1: "objectname1",

     name2: "objectname2",

     // Method 1 : Traditional
     getInfo: function () {
          // return `${this.name1}`
          let a = "hello"
          console.log(a, this.name1, '\n', a, this.name2)
     },


     // this is arrow function  
     getfunction: () => {
          this.name2 = 1

          console.log(this.name2)
          console.log('this is the object function here !')
          console.log("hello arrow function ! ")
     }

}

console.log()
// calling the function form object 
// console.log(obj_function.getInfo()) // not do this 
obj_function.getInfo()
// console.log()
obj_function.getfunction()

// or yeah bhot crazy cheej hai ...
// this = current object 


