const API_KEY =  'c7cfa9764acc40e0977baf4dd8dae782';
const base_URL = 'https://newsapi.org/v2/';

export default class NewsApiService{
    constructor(){
        this.searchQuery='';
        this.page = 1;
    }
    fetchArticles(){
        console.log(this);
        const options = {
    headers: {
        Authorization: API_KEY,
    }
};
const url = `${base_URL}everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
   
    // console.log('Hi!');
        return fetch(url, options)
            .then(r => r.json())
            .then(data=>{
                // console.log(data);
                this.incrementPage();

                return data.articles;
            });
    }

    incrementPage(){
        this.page += 1;
    }

    resetPage(){
        this.page = 1;
    }

    get query(){
        return this.searchQuery;
    }
    set query(newQuery){
        this.searchQuery = newQuery;
    }
}