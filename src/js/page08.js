console.log('page 08');
////// Погода в містах світу

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

// console.log(search);
search.addEventListener('submit', onSearch);

function onSearch(evt){
    evt.preventDefault();
    console.log(evt.currentTarget.elements);

    const{query, days} = evt.currentTarget.elements;

    // console.log(query.value);
    // console.log(days.value);
   
    getWeather(query.value, days.value)
    .then(data =>{
        console.log(data.forecast.forecastday);
        list.innerHTML = '';

        createMarkUp(data.forecast.forecastday)
   
      })
    .catch(err=>console.log(err));
    
}
// http://api.weatherapi.com/v1/forecast.json?key=65fc8710104c48e595e140016252406&q=Paris


function getWeather(city, days){

    const BASE_URL = 'http://api.weatherapi.com/v1';
    const API_KEY = '65fc8710104c48e595e140016252406';
    
    const params = new URLSearchParams({
        key: API_KEY,
        q: city,
        days: days,
        lang: 'uk',
    });
    // console.log(params.toString());
    // `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`
    return fetch(`${BASE_URL}/forecast.json?${params}`)
    .then(resp=>{
        // console.log(resp)
        // console.log(resp.json());    ////// повертає проміс
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        return resp.json();
    })
}

function createMarkUp(arr){
   const markUp = arr.map(({date, day: { avgtemp_c, condition: { text, icon}}})=>`
            <li class="p8_li">
                <img src="${icon}" alt="${text}">
                <p>${text}</p>
                <h2>${date}</h2>
                <h3>${avgtemp_c}</h3>
            </li>
        `).join('');

     return  list.insertAdjacentHTML('beforeend', markUp);
}

