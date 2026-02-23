# Creating a new element in DOM 
 
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

