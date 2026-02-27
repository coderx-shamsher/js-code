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
h2.appendChild(textnode)


document.body.appendChild(div)


/// inserting elements before the node 
let main_div = document.getElementsByName("main_div")
console.log(main_div)

// 1) create a new element 
let new_div = document.createElement("div")
new_div.style.backgroundColor = "red"
new_div.style.color = "black"
new_div.style.border = "2px solid white"
new_div.style.width = "20rem"
new_div.style.height = "20rem"
new_div.innerHTML = "<p> this is the new div added using the <b>.bofore() </b> Method </p> "
// now muje es node/ element k pahale 
document.querySelector("#id001").before(new_div)


// kisi bhi node k bad mein element ko insert krna using the insert method 
let after_div = document.createElement("div")
after_div.style.width = "30rem"
after_div.style.height = "30rem"
after_div.style.backgroundColor = "lightpink"
after_div.style.color = "blue"
after_div.innerText = "this div inserted using the after() method"

new_div.after(after_div)

// this method insert the element before the first child element , pahle element child say pahle ager insert krna hai to 
// new_div.prepend(div)

// lets replace one div with other element 
new_div.setAttribute("class","newDiv")

let h2tag = document.createElement("h2")
h2tag.style.width = "30rem"
h2tag.style.height = "30rem"
h2tag.style.backgroundColor = "lightblue"
h2tag.innerHTML = "this element is replaced "

document.getElementById("id001").replaceWith(h2tag)


// append the p element within the new div 
let ptag = document.createElement('p')
ptag.innerText = "this text inside the p tag and p tag is added using the append method "
new_div.append(ptag)


/// adding string use the insertadjacenthtml() method 
// es method main hame position pass krni hoti hai like -> 
/// beforebegin 
after_div.insertAdjacentHTML("beforebegin","adding string using the beforebegin <strong> in insertAdjacenthtml </strong>")
// esne mere div Element k pahle mera text add kr kiya vese yeh text + element add kia hain meine.. 


// afterbegin 
after_div.insertAdjacentHTML("afterbegin","adding string using the afterbegin <strong> in insertAdjacenthtml </strong>")
// mere div mein pahel ek text hai or esene mere div k ader k text k pahel position lyi or pahle lag gaya.. 

after_div.insertAdjacentHTML("afterend","adding string using the AfterEnd <strong> in insertAdjacenthtml </strong>")
// ab mere div k end mein yeh string or text content add ho gya 

after_div.insertAdjacentHTML("beforeend"," <br> adding string using the beforeend <strong> in insertAdjacenthtml </strong>")
