
const select = document.querySelectorAll('.currency');

const input_currency = document.getElementById('input_currency');

const out_currency = document.getElementById('output_currency');


const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(data => data.json())
  .then((data) => {
    const entries = Object.entries(data);
     for (i  = 0; i< entries.length; i++) {
       select[0].innerHTML  += `<option value="${entries[i][0]}">${entries [i][0]}</option>`;
       select[1].innerHTML  += `<option value="${entries[i][0]}">${entries [i][0]}</option>`;
       
     }
    // console.log(entries);
  });



  function convert() {
    let input_currency_val = input_currency.value;
    if (select[0].value !== select[1].value) {
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].options[select[0].selectedIndex].value}&to=${select[1].options[select[1].selectedIndex].value}`)
            .then((val) => val.json())
            .then((val) => {
                out_currency.value = Object.values(val.rates)[0];
                console.log(Object.values(val.rates)[0]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } else {
        alert('Please select two different currencies');
    }
}
  
