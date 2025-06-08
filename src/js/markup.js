import '../css/one_card.css';

export {appendArticlesMarkup};

const refsMar = {
    articlesContainer: document.querySelector('.js-articles-container'),
};
// console.log(refsMar.articlesContainer);

 function appendArticlesMarkup(articles){
     const markUp = `
        <li class="li_back">
            <a href="${articles.url}" target ="blank" rel="noopener noreferrer">
                <article>
                    <img src="${articles.urlToImage}" alt="" width="480" >
                    <h2 class="title_h2">${articles.title}</h2>
                    <p>Posted by: ${articles.author}</p>
                    <p>${articles.description}</p>
                </article>
            </a>
        </li>
`;

return refsMar.articlesContainer.insertAdjacentHTML('beforeend', markUp);
}

