// let banner = document.getElementById('page-banner')
// let page = document.getElementsByClassName('title')
// let ul = document.getElementsByTagName('ul')
// console.log(ul)
// Array.from(page).forEach((element) => console.log(element .innerHTML = 'mr tobi'))

// page.array.forEach((element )=> console.log(element)){
    
// });
// for (let index = 0; index < page.length; index++) {
//     const element = page[index];
//     console.log(element)
    
// }

// console.log(page)
// event listener takes two things the description and call back function

let books = document.querySelector('#book-list ul');
books.addEventListener('click' ,(e)=>{
    console.log(e.target)
  
    if(e.target.className == "delete"){
        const li = e .target.parentElemet
        books.removeChild(li)
        // console.log(li)
    }

})

const addForms = document.forms['add-book']
addForms.addEventListener('submit',(event)=>{
    event.preventDefault()
    const value = addForms.querySelector('input[type = "text').value

    const li = document.createElement("li")
    const addBook = document.createElement('span')
    const deleteBtn = document.createElement('span')

    addBook.textContent = value
    deleteBtn.textContent = "delete";
    li.appendChild(addBook)
    li.appendChild(deleteBtn)
    books.appendChild(li)

    addBook.classList.add('name')
    deleteBtn.classList.add('delete')
    //  console.log(li)



})
const searchBook = document.forms['search-books'].querySelector('input')
   searchBook.addEventListener('keyup',(event)=> {
    const value = event.target.value.toLowerCase();
    const titles = books.getElementsByTagName("li")
    Array.from(titles).forEach((title)=>{
       const text  = title.firstElementChild.textContent;
       if(text.toLowerCase().includes(value)){
        title.style.display = "block"
       }else{
        title.style.display = "none"
       }
    })
   })