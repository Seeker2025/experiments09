console.log('page 04');

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e){
    e.preventDefault();
    console.log('Hi!');
}

console.log(refs.searchForm);
console.log(refs.articlesContainer);

const options = {
    headers: {
        Authorization: 'c7cfa9764acc40e0977baf4dd8dae782',
    }
};

const url = 'https://newsapi.org/v2/everything?q=cat&language=en&pageSize=10&page=1';

fetch(url, options)
.then(r => r.json()).then(console.log());