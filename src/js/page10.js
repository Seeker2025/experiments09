console.log('page 10. Observer');

const list = document.querySelector('ul.js-list');
const loadMore = document.querySelector('[type="button"]');
const target = document.querySelector('.js-guard');
let currentPage = 1;

var options = {
  root: null,
  rootMargin: "200px",
  threshold: 1.0,
};

var observer = new IntersectionObserver(onLoad, options);
function onLoad(entries, observer){
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
                console.log(entries);
                currentPage += 1 ;

                getTrending(currentPage).then(data=>{

                markUp(data.results);
                if(data.page === data.total_pages){
                 observer.unobserve(target);
                 }
                              
                })
                .catch(err=>console.log(err));
            }
    })
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

    markUp(data.results);
    observer.observe(target);   
})
.catch(err=>console.log(err));

function markUp(arr){
    let draft = null;
    draft = arr.map(({poster_path, title})=>{

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

let counter = 1;
window.addEventListener('scroll', onScroll)

function onScroll(){
    counter += 1
    console.log(counter);
}
