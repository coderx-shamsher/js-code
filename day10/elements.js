// Create element with createElement() method   
const div = document.createElement("div")
console.log(div)

// lets add some attributes 
div.setAttribute("name","main_div")

// adding class attribute using the setattribute()
div.setAttribute("class","container")

// using the className() setting the class name 
div.className = "main_box"

// setting id using the id()
div.id = "id001"


// adding some style in div 
div.style.backgroundColor = "rgba(25, 104, 113, 0.915)"
div.style.paddingLeft = "15px"
div.style.paddingTop = "15px"
div.style.width = "25rem"
div.style.height = "20rem"

// adding text or content inside the div 
// or hame eske ander koi or element bhi add kr sakte hain 
let h2 = document.createElement("h2")

// using the append child method ham add krte hain koi bhi element kisi bhi Element mein 
div.appendChild(h2)

// adding some text inside the h2 now 
// 1) first way to do that but yeah ek efficient way nhhi mana jata keo k yeh memory efficient nhi hai 
// h2.innerText = "This is the heading of main Content"

// 2) way to do the same thing 
// first create a text node using the document.createtextnode() method , or yeh method ek string value lyta hai jo ki text hota hai 
let textnode = document.createTextNode("this is text node .. broo.")

// then append into your Element using the appendChild() Method 
// h2.appendChild(textnode)


document.body.appendChild(div)