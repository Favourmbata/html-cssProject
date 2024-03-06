function calculate(){
    let amount = Number(document.querySelector(".amount").value);
    
    if(document.querySelector(".naira").checked && amount > 0){
        amount *= 1000.50;
        amount = amount.toLocaleString(undefined,{style :"currency", currency : "NGN"})
        document.querySelector(".finalDisplay").innerHTML = `New convert is : ${amount}`;
    }
    else if(document.querySelector(".euro").checked && amount > 0){
        amount *= 0.93;
        amount = amount.toLocaleString(undefined,{style :"currency", currency : "EUR"})
        document.querySelector(".finalDisplay").innerHTML = `New convert is : ${amount}`;
        }
    else if(document.querySelector(".pounds").checked && amount > 0){
        amount *= 0.80;
        amount = amount.toLocaleString(undefined,{style :"currency", currency : "GBP"})
        document.querySelector(".finalDisplay").innerHTML =`New convert is : ${amount}`;
        } 
    else{
        document.querySelector(".finalDisplay").innerHTML = "Enter a valid amount";
        }
}

function onkey(event){
    if (event.key === 'Enter'){
        calculate();
    }

}