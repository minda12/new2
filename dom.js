// //console.dir(document);
// // console.log(document.domain)
// // console.log(document.URL)
// // console.log(document.title)

// // //document.title= 123
// // console.log(document.doctype)
// // console.log(document.head)
// // console.log(document.body)

// // //console.log(document.all)
// // //console.log(document.all[10])
// // //document.all[10].textContent ='hello'
// // console.log(document.forms[0])
// // console.log(document.images)


// // //console.log(document.getElementById("header-title"))
// // var headerTitle= document.getElementById("header-title")
// // var header= document.getElementById("main-header")
// // //console.log(headerTitle)
// // //headerTitle.textContent='bybye'
// // //headerTitle.innertext='bybye'
// // //headerTitle.innerHTML='<h3>Heelllo</h3>'
// //  //headerTitle.innerText="<h3>v<h3>"
// // header.style.borderBottom ="solid 20px #000"

// var items = document.getElementsByClassName("list-group-item")
// console.log(items)

// items[3].textContent="Hello"
// items[3].style.fontWeight="bold"
// items[3].style.backgroundColor="yellow"
// items[4].textContent="Hello"
// items[4].style.fontWeight="bold"
// items[4].style.backgroundColor="yellow"
// // var add =document.querySelector('.title')

// // add.style.fontWeight='bold'
// // add.style.color="green"


// // items[2].style.backgroundColor="green"

// // for(var i =0;i<items.length;i++)
// // {

// // items[i].style.fontWeight="bold"
// // items[i].style.color="blue"

// // }

// //GETELEMENTSBYTAGNAME//
// var li = document.getElementsByTagName("li")
// console.log(li)
// console.log(li[4])
// li[4].textContent ='Hello 2'
// li[4].style.fontWeight ='bold'
// li[4].style.backgroundColor='grey'

// //items[1].textContent="Hello"
// //items[1].style.fontWeight="bold"
// //items[1].style.backgroundColor="yellow"
// // var add =document.querySelector('.title')

// // add.style.fontWeight='bold'
// // add.style.color="green"


// // items[2].style.backgroundColor="green"

// // for(var i =0;i<items.length;i++)
// // {

// // items[i].style.fontWeight="bold"
// // items[i].style.color="blue"

// // }

//Traversing the dom 

var itemList = document.querySelector('#items')
//parent node

// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor ='lightgreen'
// console.log(itemList.parentNode.parentNode)

//Parent Elemnt
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor ='lightgreen'
// console.log(itemList.parentNode.parentNode)

// //childNodes
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor ='yellow'
// //childnode
// console.log(itemList.firstChild)
// // fistelementchild 
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent ='Hello1' 

//console.log(itemList.lastChild)
// // fistelementchild 
//  console.log(itemList.lastElementChild)
//  itemList.lastElementChild.textContent ='Hello4'

//nextSibling
console.log(itemList.nextSibling)
console.log(itemList.nextElementSibling)

//prevSibling
console.log(itemList.previousSibling)
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color ='green'






