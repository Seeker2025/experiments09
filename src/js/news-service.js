export default class NewsApiService{
    constructor(){
        this.searchQuery='';
        this.page = 1;

    }
    fetchArticles(){
        console.log(this);
        const options = {
    headers: {
        Authorization: 'c7cfa9764acc40e0977baf4dd8dae782',
    }
};
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
   
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