const { promises } = require("dns");

function loadDoc(url,callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange',function(){
        if (this.readyState == 4 && this.status == 200){

            const data = JSON.parse(xhttp.responseText);
            callback(undefined,data);
            document.getElementById("demo".innerHTML) = this.responseText

        }else if(xhttp.readyState === 4){
            callback("error fetching data",undefined);
        }
       
    })
    xhttp.open("GET", url);
    xhttp.send();
    // xhttp.onload = funct=ion() {myFunction(this);}
   
  }
  loadDoc ('https://dummyjson.com/products',(err ,data) => {
    if(err)console .log("error:",err);
    else console.log("data:",data);
    loadDoc ('https://dummyjson.com/users',(err ,data) => {
    if(err)console .log("error:",err);
    else console.log("data:",data);

    loadDoc ('https://dummyjson.com/quotes',(err ,data) => {
        if(err)console .log("error:",err);
        else console.log("data:",data);
    })
})
 
})

function promiseFetchData(url){
    const xhttp = new XMLHttpRequest();
    return new promises{function(resolve,reject){
         xhttp.addEventListener('readystatechange',function(){
            if(xhttp.readyState === 4 && xhttp.status === 200){
                const data = JSON.parse(xhttp.responseText);
                resolve(data);
                document.getElementById("demo".innerHTML) = this.responseText
    
            }else if(xhttp.readyState === 4){
                reject("error fetching data",undefined);
            };
   
         })
    }

    
    }
}