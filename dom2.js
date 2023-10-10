//console.dir(document);
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)

// //document.title= 123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)

// //console.log(document.all)
// //console.log(document.all[10])
// //document.all[10].textContent ='hello'
// console.log(document.forms[0])
// console.log(document.images)


// //console.log(document.getElementById("header-title"))
// var headerTitle= document.getElementById("header-title")
// var header= document.getElementById("main-header")
// //console.log(headerTitle)
// //headerTitle.textContent='bybye'
// //headerTitle.innertext='bybye'
// //headerTitle.innerHTML='<h3>Heelllo</h3>'
//  //headerTitle.innerText="<h3>v<h3>"
// header.style.borderBottom ="solid 20px #000"

// var items = document.getElementsByClassName("list-group-item")
// console.log(items[4])

// items[3].textContent="Hello"
// items[3].style.fontWeight="bold"
// items[3].style.backgroundColor="yellow"
// items[4].textContent="Hello"
// items[4].style.fontWeight="bold"
// items[4].style.backgroundColor="yellow"
// var add =document.querySelector('.title')

// add.style.fontWeight='bold'
// add.style.color="green"


// items[2].style.backgroundColor="green"

// for(var i =0;i<items.length;i++)
// {

// items[i].style.fontWeight="bold"
// items[i].style.color="blue"

// }

// //GETELEMENTSBYTAGNAME//
// var li = document.getElementsByTagName("li")
// console.log(li)
// console.log(li[4])
// li[4].textContent ='Hello 2'
// li[4].style.fontWeight ='bold'
// li[4].style.backgroundColor='grey'

//items[1].textContent="Hello"
//items[1].style.fontWeight="bold"
//items[1].style.backgroundColor="yellow"
// var add =document.querySelector('.title')

// add.style.fontWeight='bold'
// add.style.color="green"


// items[2].style.backgroundColor="green"

// for(var i =0;i<items.length;i++)
// {

// items[i].style.fontWeight="bold"
// items[i].style.color="blue"

// }



// //QuerySelector 
//   var seconditem = document.querySelector('.list-group-item:nth-child(2)')
//   seconditem.style.backgroundColor='green'
//   console.log(seconditem )
//   var thirditem = document.querySelector('.list-group-item:nth-child(3)')
//   thirditem.style.color='white'
// //QuerySelectorALL
//   var itm = document.querySelectorAll('.list-group-item')
//   console.log(itm)
//   itm[1].style.color='green'

//   var odd=document.querySelectorAll('li:nth-child(odd)')

//   for(var i =0; i<odd.length;i++)
//   {
//     odd[i].style.backgroundColor ='green'
//   }

// Traversing the Dom

var itemlist=document.querySelector('#items')

// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor ='green'
// console.log(itemlist.parentNode.parentNode.parentNode)

// //parent element
//  console.log(itemlist.parentElement)
//  itemlist.parentElement.style.backgroundColor ='blue'
//  console.log(itemlist.parentElement.parentElement.parentElement)

// //childnodes
// console.log(itemlist.childNodes)
// //childrens
// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[1].style.backgroundColor ='yellow'

// //firstChild
// console.log(itemlist.firstChild)
// //firstElementChild
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent='firstElementChild'

// //LastChild
// console.log(itemlist.lastChild)
// //firstElementChild
// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.textContent='lastElementChild'

// //nextSibling 

// console.log(itemlist.nextSibling)

// // //nextelementSibling 

// console.log(itemlist.nextElementSibling)

// //prevSibling 

// console.log(itemlist.previousSibling)

// //prevelementSibling 

// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color ='green'

//create dom elements 
//create Element
//create a div
var newDiv  =document.createElement('div')
//add class 
newDiv.className = 'hello'
//add id 
newDiv.id='hello1'
//setatrribute
newDiv.setAttribute('title','hello div')
//create new node
var newDivtext =document.createTextNode('hello people')  
//addtext to div
newDiv.appendChild(newDivtext)

//inserting to dom
 var container =document.querySelector('header .container')
 var h1 = document.querySelector('header h1')

// var container2 =document.querySelector('div .list-group-item')
// var h2 = document.querySelector('div ul-li')

var container2 =document.querySelector('div .list-group')
var h2 = document.querySelector('div li')

console.log(newDiv)



 newDiv.style.fontSize ='30px'
container.insertBefore(newDiv , h1)
container2.insertBefore(newDiv , h2)




