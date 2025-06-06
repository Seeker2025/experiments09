console.log('page 04');

import NewsApiService from './news-service';
// console.log(NewsApiService);

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

console.log(refs.searchForm);
console.log(refs.articlesContainer);
console.log(refs.loadMoreBtn);


const newsApiService = new NewsApiService();

// const options = {
//     headers: {
//         Authorization: 'c7cfa9764acc40e0977baf4dd8dae782',
//     }
// };

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e){
    e.preventDefault();

    newsApiService.query = e.currentTarget.elements.query.value;
    // const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`;
   
    // console.log('Hi!');
    // fetch(url, options)
    // .then(r => r.json()).then(console.log());

    newsApiService.fetchArticles();
}

function onLoadMore(){
    newsApiService.fetchArticles();
}







