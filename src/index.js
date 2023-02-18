const pRef = document.querySelector('#js-p');
const inputRef = document.querySelector('#js-input');

inputRef.addEventListener('blur', function (e) {
    fetchCountries(e.target.value)
});



function fetchCountries(name){
    const url = `https://restcountries.com/v3.1/name/${name}`;
    
    return fetch(url)
    .then(res => res.json())
    .then(res => pRef.src = res[0].flags.png)
         
}




// pRef.textContent = res[0].name flags.png