// let userinput = document.getElementsByClassName('user-input')
//  Array.from(userinput).forEach((element) => console.log(element .innerHTML = 'mr tobi'))

// console.log(userinput)

const form = document.forms['form']
form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const firstName = form.querySelector('firstName').value;
   const lastName = form.querySelector('lastName').value;
   const age = form.querySelector('age').value;


   const obj = {
    firstName:firstName,
    lastName:lastName,
    age:age
}
console.log(obj)






})

