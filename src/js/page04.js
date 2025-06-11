console.log('page 04');

// default export
import NewsApiService  from './news-service';
import LoadMoreBtn from './loadMoreBtn.js';
//named import and renaming function
import { 
            appendArticlesMarkup as appendArticlesMarkUp,
            clearArticlesContainer 
        }  from './markup.js';
// console.log(NewsApiService);
// console.log(draftUp);
// console.log(clearArticlesContainer);
// console.log(LoadMoreBtn);

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    // articlesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

// console.log(refs.searchForm);
// console.log(refs.articlesContainer);
// console.log(refs.loadMoreBtn);

const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
// console.log(loadMoreBtn);
// console.log(loadMoreBtn.refs);
// console.log(loadMoreBtn.refs.button);

// const options = {
//     headers: {
//         Authorization: 'c7cfa9764acc40e0977baf4dd8dae782',
//     }
// };
// loadMoreBtn.hide();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e){
    e.preventDefault();

    clearArticlesContainer();
    newsApiService.query = e.currentTarget.elements.query.value;
    newsApiService.resetPage();

    if(newsApiService.query === ' '){
        return alert('Введіть щось');
    }
    // const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`;
   
    // console.log('Hi!');
    // fetch(url, options)
    // .then(r => r.json()).then(console.log());

    newsApiService.fetchArticles().then(articles=>{
        // console.log(articles[0].url);
        // console.log(articles[0].urlToImage);
         articles.map(itm =>{
            appendArticlesMarkUp(itm);
            loadMoreBtn.show();
    }
        
    )});
}

function onLoadMore(){
    newsApiService.fetchArticles().then(articles=>{
            articles.map(itm =>{
            appendArticlesMarkUp(itm);
    }

    )});
}








