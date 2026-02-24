# Topic -->  Creating a new element in DOM 
 
## create html file 
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./dom.css">
</head>

<body>
    <div id="main_div">
        <div id="box1" class="boxes">box-one</div>
        <div id="box2" class="boxes">box-two</div>
        <div id="box3" class="boxes">box-three</div>
        <div id="box4" class="boxes">box-four</div>
        <div id="box5" class="boxes">box-five</div>
    </div>
</body>

</html>
```
> add css for better visuals 

## create dom.js or use the script tab and use the both inspect mode and script file etc 
```js 
// ----> getting the parent element 

let parent = document.querySelector("#main_div")
console.log(parent)

// now es parents k childrens 
let childs  = parent.children
console.log(childs) 
// esne ek html collection di hai

// getting values using the indexing 
let child_1 = childs[0]
let child_3 = childs[2]
let child_5 = childs[4]
console.log(child_1)
console.log()


// now get the inner text or content 
console.log(child_1.innerText)
console.log()
// getting all the values using the for 
console.log("looping the all values")

for(let a = 0; a < parent.children.length; a++ ){
    console.log(parent.children[a].innerText)
}

// we can add styles on childs
child_3 =  document.querySelector('#main_div').children[2]
child_3.style.backgroundColor = "lightblue" 

// get first element child and last element child 
let frt_ele_child =  document.querySelector("#main_div").firstElementChild
console.log()
console.log(frt_ele_child)
console.log()

let lst_ele_child =  document.querySelector("#main_div").lastElementChild
console.log()
console.log(lst_ele_child)

// first element ka nextelement sibling 
let scnd_sibling = frt_ele_child.nextElementSibling
let thr_sibling = scnd_sibling.nextElementSibling

console.log(thr_sibling)
// using this method han next next elements ko get kr skate hain  

// lets get the parent of the child 
let parent_ele = frt_ele_child.parentElement
console.log(parent_ele)

// kisi bhi parent ki k kitne childnodes hai 
let nodes =  document.querySelector("#main_div").childNodes
console.log(nodes) // eh hame ek node list (array) return krega jis mein kuch text nodes bhi hote hain , now text nodes kuch nhi bs spaces ko text node count kiya jaata hai.. every line break is text node or child nodes hai , ek line break ko count krta hai us k bad mein jitni bhi lines (blank lines) add koi browser render nhi krta hai... Note-> comment bhi count hota hai childnodes mein ... 


```
> this is more dom operations need to practice or learn about it 

## Now lets create new elements using the dom operations 
1) create a new html file with basic template and just make sure no elements inside the body for now.. just blank html file 
```html 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

##  new element js code here 
```js 
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
// first create a text node using the document 
let textnode = document.createTextNode = "this is text node .. broo."

// then append into your Element using the appendChild() Method 
h2.appendChild(textnode)


```

> now hamara server run krne k bad bhi hame hamara new Element show nhi hoga keo k hame ese add krna pardta hai yan link jo bhi samjo then how to do that

```js 
// add or append the new Element into body 
document.body.appendChild(div)  // add this line and element show hoga 
```

> that is the all how to add new element or ese he ham new elements add kr sakte hain.. 