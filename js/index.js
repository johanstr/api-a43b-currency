// let currencyAbbr = document.querySelector('#valuta');
// let amountInput = document.querySelector('#amount');
// let answer = document.querySelector('#value-in-euros');
// let abbr = '';
// let amount = 0;
let btn2 = document.querySelector('#button2');

window.onload = function () {
    console.log('ONLOAD');
    btn2.addEventListener('click', calcValue);
};

// function calcValueInEuros()
// {
//     abbr = currencyAbbr.value;
//     amount = amountInput.value;

//     fetch('http://localhost/school/1920/klas3/api/les02-a43b/api/index.php?cmd=calc&cur=' + abbr + '&amount=' + amount)
//         .then( response => response.json() )
//         .then(data => { 
//             console.log(data);
//             answer.innerHTML = data.euro_value + ' EUR';
//         })
//         .catch(error => {
//             console.log(error); 
//         });
// }

function calcValue()
{
    let cur = document.querySelector('#from-valuta').value;
    let amount = document.querySelector('#amount2').value;
    let tocur = document.querySelector('#to-valuta').value;
    let output = document.querySelector('#value-in-currency');

    fetch('http://localhost/school/1920/klas3/api/les02-a43b/api/index.php?cmd=calcval&cur=' + cur + '&amount=' + amount + '&tocur=' + tocur)
        .then(response => response.json())
        .then(data => {
            output.innerHTML = data.value + ' ' + data.to;
        })
        .catch(error => console.log(error));
}