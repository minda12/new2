var form =document.getElementById('addForm')

var itemList=document.getElementById('items')

var filter=document.getElementById('filter')

//form submit event

//eventlistner for adding
form.addEventListener('submit',addItem)
//eventlistner for deleting
itemList.addEventListener('click',delItem)

// eventlistner forFILTER ITEMS 
filter.addEventListener('keyup', filterItems)

//function to Add item 
function addItem(e){

    e.preventDefault()
    
    var newItem =document.getElementById('item').value

    //create new ki element 

    var li = document.createElement('li')

    //add class 
    li.className = 'list-group-item'
    console.log(li)

    //add text node with input value 

    li.appendChild(document.createTextNode(newItem))

    //create dlete button

    var delbutton =document.createElement('button')

    //delbtnclasses
    delbutton.className='btn btn-danger btn-sm float-right delete'
    delbutton.appendChild(document.createTextNode('x'))
    li.appendChild(delbutton)

    itemList.appendChild(li)
}


   function delItem(e){
if(e.target.classList.contains('delete'))
{
    if (confirm('Are you Sure'))
    {
        var li = e.target.parentElement
        itemList.removeChild(li)

    }
}

}

function filterItems(e)
{
    //convet to lowercase
    var text =e.target.value.toLowerCase()
    

    var items = itemList.getElementsByTagName('li')
  

    Array.from(items).forEach(function(item)
    {
        var ItemName = item.firstChild.textContent
        if(ItemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display='block'
  
        }
        else{
            item.style.display='none'

        }
    })
}

//I accidentally did filter with previous question itself so no change here

