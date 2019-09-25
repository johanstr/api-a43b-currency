let currencyAbbr = document.querySelector('#valuta');
let amountInput = document.querySelector('#amount');
let answer = document.querySelector('#value-in-euros');
let abbr = '';
let amount = 0;

function calcValueInEuros()
{
    abbr = currencyAbbr.value;
    amount = amountInput.value;

    fetch('http://localhost/school/1920/klas3/api/les02-a43b/api/index.php?cmd=calc&cur=' + abbr + '&amount=' + amount)
        .then( response => response.json() )
        .then(data => { 
            console.log(data);
            answer.innerHTML = data.euro_value + ' EUR';
        })
        .catch(error => {
            console.log(error); 
        });
}