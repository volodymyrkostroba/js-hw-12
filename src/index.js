const countryRef = document.querySelector('.country');
const inputRef = document.querySelector('#js-input');

inputRef.addEventListener('input', formHandler,700);

function formHandler(e){
    fetchCountries(e.target.value)

}



function fetchCountries(name){
    const url = `https://restcountries.com/v3.1/name/${name}`;
    
    return fetch(url)
    .then(res => res.json())
    .then(res => {
         const item = res[0];
        
        countryRef.insertAdjacentHTML('beforeend',murkapHandler(item) )
    })
        
         
}



function murkapHandler(obj){

countryRef.innerHTML = '';

const title = `<li class="country__item">
<img src="${obj.flags.png}" alt="" class="country__flag">
<h2 class="country__title">${obj.name.common}</h2>
<p class="country__capital">${obj.capital[0]}</p>
<p class="country__population">${obj.population} peoples</p>
</li>`;

return title;
}




// pRef.textContent = res[0].name flags.png