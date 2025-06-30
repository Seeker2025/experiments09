console.log('page 09');

// const isObj = new IsObs({
//     one: bed,
//     two: chair,
// });

const BASE_URL = 'https://api.themoviedb.org/3/';
const ENDPOINT = 'trending/movie/day';
const API_KEY = '3af5fd0b838bf2a259ff06cb75968037';

function getTrending(){
    return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`).then((resp)=>{
        if(!resp.ok){
            throw new Error(resp.statusText);
        }
        return resp.json();
    })
}
getTrending().then(data=>console.log(data)).catch(err=>console.log(err));