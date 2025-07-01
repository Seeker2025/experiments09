console.log('page 09');

const list = document.querySelector('ul.js-list');
const loadMore = document.querySelector('[type="button"]');
let currentPage = 1;

loadMore.addEventListener('click', onLoad);

// console.log(list);
// console.log(button);

function onLoad(){
    currentPage +=1 ;
    getTrending(currentPage)
    .then(data=>{
    markUp(data.results)
}
)
    .catch(err=>console.log(err));
}

const BASE_URL = 'https://api.themoviedb.org/3/';
const ENDPOINT = 'trending/movie/day';
const API_KEY = '3af5fd0b838bf2a259ff06cb75968037';

function getTrending(page=1){
    return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then((resp)=>{
        if(!resp.ok){
            throw new Error(resp.statusText);
        }
        return resp.json();
    })
}
getTrending().then(data=>{
    // console.log(data.results[0].poster_path);
    console.log(data.results);
    markUp(data.results);

})
.catch(err=>console.log(err));

function markUp(arr){
    let draft = null;
    draft = arr.map(({poster_path, title})=>{
//    console.log(poster_path)
//////there is an image width in the endpoint     
      return   `
         <li class="box_09">
<img src="https://image.tmdb.org/t/p/w400${poster_path}" title=${title}>
            <h2>${title}<h2>
         </li>
    `
    }
)
    return list.insertAdjacentHTML('beforeend', draft);
}
