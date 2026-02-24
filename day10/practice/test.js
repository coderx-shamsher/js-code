// create a nav bar elements 

const header = document.createElement("header")

// create nav tag 
const nav = document.createElement("nav")

// append into document 
document.body.appendChild(header)
document.body.querySelector('header').appendChild(nav)


// create li with for loop  
for(let li=0; li<=2; li++){
    const newli = document.createElement("li")
    console.log(newli)

    // then append kiya nav tag mein.. 
    document.body.querySelector('nav').appendChild(newli)
}

// lets add attributes to header and nav 
header.className = "header_main"
nav.className = "navbar"
nav.id = "nav001"

// add styles using the css file now using the dom for now.....

// adding text into lis 
let li_1 = document.querySelectorAll("li")[0]
let li_2 = document.querySelectorAll("li")[1]
let li_3 = document.querySelectorAll("li")[2]
li_1.innerText = "Home"
li_2.innerText = "About"
li_3.innerText = "Contact"
// console.log(li_1)
// document.querySelector(".li_01")