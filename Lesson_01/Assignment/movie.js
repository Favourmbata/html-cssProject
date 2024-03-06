

const form = document.forms['info']
form.addEventListener("submit",(event)=>{

    event.preventDefault();

const dataInfo = form.querySelector("#inputField").value;

let obj = {
    value : dataInfo
}

let valueInfo = async (data) => {
    
const url = 'https://moviesdatabase.p.rapidapi.com/titles';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a7c7c4814mshc1fc687bb7a8f0bp1c0d87jsnc6ef27b8c468',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}}
valueInfo(obj)
})