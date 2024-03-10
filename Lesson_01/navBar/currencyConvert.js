let rate1 = document.querySelector(".rate1");
let rate2 = document.querySelector(".rate2");
let resultbtn = document.querySelector(".result");
let selects = document.querySelectorAll(".options select");

let select1  = selects[0]
let select2 = selects[1]

let inputs = document.querySelectorAll(".input input")

let input1 = inputs[0];
let input2 = inputs[1];

let rates = {}

const requestUrl = 'https://openexchangerates.org/api/latest.json'
const app_id= '19427c6cdb96473c9ab902bec710ba32'

fetch(requestUrl).then((res)=>res.json()).then(data => console.log(data));
   //  res = await res .json();
   //  rates = res.rates;
   //  console.log(rates);
   //  populateOptions ();
// function fetchData(data) {
//     console.log(requestUrl);
//     //  console.log("1 US Dollar equals " + data.rates.GBP + " British Pounds");

//    async function fetchRates(){
//     let res = await fetch(requestUrl);
//     res = await res .json();
//     rates = res.rates;
//     populateOptions ();
  
// }
//    fetchRates();


     
//    function populateOptions(){
//         let valu = "";
//         Object.keys(rates).forEach(code =>{
//             let str = `<option value="${code}">${code} </option>`;
//             valu += str;
//         })
//         selects .forEach((s) =>(s .innerHTML = valu));
//      }
    
//      function convert(val , fromCurr ,toCurr){
//         let v = (val / rates[fromCurr]) * rates[toCurr];
//         let v1 = v.toFixed(3);
//         return v1 = 0.0 ? v.toFixed(5) : v1;

//      }

//      function displayRate (){
//         let v1 = select1.value;
//         let v2 = select2.value;

//         let val = convert(1 , v1 , v2);
//         rate1.innerHTML = `1 ${v1} equals`;
//         rate2.innerHTML = `1  ${val} ${v2}`;
//      }
//      resultbtn = addEventListener("click",()=>{
//         let fromCurr = select1.value;
//         let fromValue = parseFloat(input1.value);
//         let toCurr = select2.value;

//         if(isNaN (fromValue)){
//             alert("enter a number");
//         }else{
//            let cVal = convert(fromValue , fromCurr ,toCurr) ;
//            input2.value = cVal
//         }
//      })
//      selects.forEach(s =>s.addEventListener("change" ,displayRate));
//      document.querySelector(".swap").addEventListener("click",()=>{
//         let in1 = input1.value;
//        let in2 = input2.value;
//        let op1 = select1.value;
//        let op2 = select1.value;

//        input2.value = in1;
//        input1.value = in2;   
       
       
//        select1.value = op1;
//        select2.value = op2
       

//        displayRate();
//      })
     
// };

console.log(requestUrl);

