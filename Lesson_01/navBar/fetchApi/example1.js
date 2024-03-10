

 const url = "https://www.youtube.com/results?search_query=html+and+css+javascript+projects";

   async function getData(){
    const response = await fetch(url);
    console.log(response);
   }
getData()
   
// 'Access-Control-Allow-Origin: *'


// fetch('http://www.youtube.com/results?search_query=html+and+css+javascript+projects', {
//   method: 'GET',
//   mode: 'cors',
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// fetch('https://jsonplaceholder.org/users');

// export function getData(){
    
// }