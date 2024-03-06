// let userinput = document.getElementsByClassName('user-input')
//  Array.from(userinput).forEach((element) => console.log(element .innerHTML = 'mr tobi'))

// console.log(userinput)

const form = document.forms['form']
form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const fName = form.querySelector('#firstName').value;
   const lName = form.querySelector('#lastName').value;
   const uEmail = form.querySelector('#email').value;
   const uPassword = form.querySelector('#password').value;
    
       const obj = {
        firstName:fName,
       lastName: lName,
        email:uEmail,
       password: uPassword
    }
 

    //    const obj = {
    //     firstName:"chichi",
    //     lastName:"delight",
    //     email:"favour123",
    //     password:"5056"
    // }
    // console.log(obj)




    const sendData = async (data) =>{
       
        try{
    
            const response = await fetch("http://localhost:4080/api/user/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Success:", result);
        }   catch(error){
            console.error("Error:", error);
        }
    };
    sendData(obj)
})

