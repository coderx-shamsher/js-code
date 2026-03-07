
// 1) adding event using  1st method and es ki help say ham mere bx1 id vale box ki inner html change kr rahe hain button k click pr 
// yeh method ok hai but es say kuch problems hoti hai jaise ki 
// Only 1 handler per event
// Overwrites previous handlers
let btn1 = document.getElementById("btn1")
btn1.onclick = function(){
    document.getElementById("bx1").innerHTML = "<p> Your document is <b> changed </b> </p>"
}

// 2)  best way to do this adding the event listener function of method...
// first hame ek event listener function dena hota hai like click , dbclick etc bhot sare hote hain then ek function or jis mein ham jis event k trigger hone pr jo krna chaahte hain code krte hain us callback function main.. 
let btn2 = document.getElementById("btn2")
btn2.addEventListener("click",function(){
    let div = document.createElement("div")
      alert("you added a new element...")
      document.getElementById('bx1').appendChild(div).style.backgroundColor ="lightpink" 
      div.style.border = "2px solid black"
      div.innerHTML = "<p> this is the <strong> added box </strong> </p>"
      div.id = "created"
})

let delbtn = document.getElementById("btn3")
delbtn.addEventListener("dblclick",()=>{
      let div = document.getElementById("created")
      // removing nodes using the .remove() function 
      div.remove()
})