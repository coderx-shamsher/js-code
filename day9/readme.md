## Dom Manipulation  using selectors in js 
**Selectors** = JavaScript methods to **find HTML elements** in the DOM tree. Like **search functions** that return element objects you can manipulate.

> Create a html file 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/styles/main.css">
</head>
<body>
      <div class="maincontainer">
           <div id="box_first" class="box">box1 this is </div>
           <div class="box">box2 this is </div>
           <div class="box">box3 this is </div>
           <div class="box">box4 this is </div>
      </div>
</body>
<script src="script.js"></script>
</html>
```
## **1. `getElementById(id)` - FASTEST (By ID)**
ager hammne kisi bhi element koi ek id di hogi to use element koi get krna using that id name 

```js 
// find the first element by unique id 
const box1 = document.getElementById("box_first")
console.log(box1)

// now lets change the bg color of that box 
// or ham eska style change krenge using the js 
box1.style.backgroundColor = "lightblue"

```
> note ham ek element ko ek he id de sakte hain .. or yeh ek unique id honi chaahie.

```js
// changing the content of the box 
box1.textContent = "content updated"
```

### **2. `querySelector(selector)` - CSS Power (First Match)**
> create a same class name two elements so we can see what is the use of this selector 
```html
           <div class="content">
               <p class="message">First message</p>
               <p class="message">Second message</p>
               
            </div>
        </div>

```

```js
// querySelector() 
// yeh sabse pahale jo Element ese milta hai use he show krta hai ager hamne same name ki class use ki hai to 
// how to use this ? ager koi class hai to uska name dena parta hai like => .classname or ager koi id hai to ham => #idname
// yeh selector both id and class pr use kiya ja sakta hai... 

//using the class name 
let firstbx = document.body.querySelector(".message") 
console.log(firstbx)
console.log()
// using the id name 
let sdbx = document.body.querySelector("#secdP")
console.log(sdbx)

// access using the tagname / element name 
let element1  = document.body.querySelector("div")
console.log()
console.log(element1)
// or jo bhi hamara sbse pahala div hoga vo hame print hokr milega... 


```

```js 

// ager mein mere id ko get krte time .id bhi lgadu like this 
let boxid =  box1.id

// esa bhi kr sakta hun or esa bhi ->
const box2 =  document.getElementById("secdP").id

console.log()
console.log(box1)
console.log()
// same method say ham elements ka class name bhi print kr sakte hain 
let boxClassName = box2.className 

// ager ese kisi bhi element ki class ka name get kr rahe ho to .class se output nhi milega keo k hame className ka use krna parta hai es jsx (react) syntax , collapse na ho es kine jsx mein ham html mein jab class define krte hain to class nhi className attribute ka use krte hain.. 

console.log()
console.log(boxClassName)

// NOTE :- MAKE SURE TO TEST INSIDE THE INSPECT MODE 

// kisi bhi element k attributes ko print kr sakte hain using this method -> getAttribute() yeh ek function hai jo ek parameter lyta hai jo ki attribute ka name hai ex-> id 
document.getElementById("secdP").getAttribute("class")

// getelement hai to ham set bhi kr sakte hain attribute ko using the setAttribute() - es method mein ek attribute name or uski value ki set krna hota hai.. 

document.getElementById("secdP").setAttribute("name", "testing_set_attribute")
// check the browser / elements tab or check kro k name attribute set huya k nhi.. 
// Note :- yeh property overwrite krti hai means ager ham set kr rahe hain attribute with value to pahle attribute ki jo value hai voh overwrite hojyegi

// ex -> ager muje ek new class attribute add krna hai without overwrite the value use this , pahale previous class name then new with space ... 
document.getElementById("secdP").setAttribute("class"," message newmessg")


// or ham eska style change krenge using the js 
box1.style.backgroundColor = "lightblue"


// DOM content manipulation 
// ham kisi hi element ki id name say us element ko print krva sakte hain 
// NOTE - use this inside the inspect mode first 
    //  title1 

    //  title1.textContent   -> eski help say jo bhi content hai us element mein print krva sakte hain 

    // same work with innerhtml

    // frtP.innerHTML 
    //or 
    //frtP.innerText

/** what is the diff ager sab same he work kr rahe hain to ? 
 * 
 *  frtP.innerText  -> ager koi bhi element mein style add kr k display ko none add kiya hai to es property say full text show nhi hoga  ex ->> 
 *   
 *  <h2 class="title" id="title1"> Title of my website <span style="display: none;"> Hidden text..</span>    </h2>
 * es case mein hamne span element ka text show nhi hoga using the -> TextContent
 * but ager ham innerContent use krenge to hamne hidden text bhi show hoga ager developer ne hidde kia hoga 
 * 
 * now ager hame innerHTML show krni hai to use this 
 * .innerHTML  
 * es ki help se ham kisi element k ander k elements ko bhi print kr sakte hain.. 
 * 
 */

// changing the content of the box 
box1.textContent = "content updated "

// querySelector() 
// yeh sabse pahale jo Element ese milta hai use he show krta hai ager hamne same name ki class use ki hai to 
// how to use this ? ager koi class hai to uska name dena parta hai like => .classname or ager koi id hai to ham => #idname
// yeh selector both id and class pr use kiya ja sakta hai... 
```

## **querySelector**
```js 
// using the class name 
let firstbx = document.body.querySelector(".message") 
console.log(firstbx)
console.log()

// using the id name 
let sdbx = document.body.querySelector("#secdP")
console.log(sdbx)

// access using the tagname / element name 
let element1  = document.body.querySelector("div")
console.log()
console.log(element1)

//  querySelector mei han kisi bhi element k attributes ko select kr sakte hain 
let eleAtt = document.querySelector("input[name]")

// geting the first-child using the querySelector 
let child = document.querySelector("p:first-child")

let myul = document.querySelector("ul")

// to get first element by queryselector 
 let frt_item = myul.querySelector("li")
  frt_item.style.backgroundColor = "lightblue"
  frt_item.style.padding = "8px"
  frt_item.textContent = "1 byte"

```

## **QuerySelectorAll()**
```js 
 // now ager muje ek say jada element ko get krna hai to use this 
  // querySelectorAll()  to get all the elements....
// Get ALL <p> elements (NodeList)

// let allPs = document.body.querySelectorAll('p')
// console.log()
// console.log(allPs)
// console.log()
// console.log(allPs.length)


// allPs.forEach(element=>{
//      element.textContent = `item `
//  })

let list = document.querySelectorAll("li")
// yeh ek array return krta hai jis par ham array k sare opertions laga sakte hain 

// now ager muje pahle ek element k color change krna hai to , using the array method 
let list_li_1 = list[0]
list_li_1.style.color = "red" 

// now use the provided method like foreach 
// es ki help say ham multiple elements par operations kr sakte hain 
list.forEach((items)=>{
        items.innerText = `item`
})

// nodelist ek propery array nhi hota yeh or es par ham array k operations nhi kr sakte ese hame convert krna pardta hai... 
```


## **GetElementByClassName()**
```js 
// now get element by classname 
let li = document.getElementsByClassName("list_li")

// or yeh ek htmlcollection return krta hai jis par bhi ham koi bhi array operations nhi laga sakte to ese convert krna pardega.. 

// how to convert !? use this method Array.from() method 
 let liarr = Array.from(li)
 console.log(liarr)
 // now hame array k sare methods mil jayenge... 
 
 liarr.forEach(ele=>{
     ele.style.backgroundColor = "lightgreen "
 })

```
>> done .... 