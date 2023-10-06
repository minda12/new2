//console.dir(document);
console.log(document.domain)
console.log(document.URL)
console.log(document.title)

//document.title= 123
console.log(document.doctype)
console.log(document.head)
console.log(document.body)

//console.log(document.all)
//console.log(document.all[10])
//document.all[10].textContent ='hello'
console.log(document.forms[0])
console.log(document.images)


//console.log(document.getElementById("header-title"))
var headerTitle= document.getElementById("header-title")
var header= document.getElementById("main-header")
//console.log(headerTitle)
//headerTitle.textContent='bybye'
//headerTitle.innertext='bybye'
//headerTitle.innerHTML='<h3>Heelllo</h3>'
 //headerTitle.innerText="<h3>v<h3>"
header.style.borderBottom ="solid 20px #000"

var items = document.getElementsByClassName("list-group-item")
console.log(items[2])

//items[1].textContent="Hello"
//items[1].style.fontWeight="bold"
//items[1].style.backgroundColor="yellow"
var add =document.querySelector('.title')

add.style.fontWeight='bold'
add.style.color="green"


items[2].style.backgroundColor="green"

for(var i =0;i<items.length;i++)
{

items[i].style.fontWeight="bold"
items[i].style.color="blue"

}
