import"./assets/styles-DQH9p5Me.js";class c{constructor(){this.searchQuery="",this.page=1}fetchArticles(){console.log(this);const r={headers:{Authorization:"c7cfa9764acc40e0977baf4dd8dae782"}},n=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;return fetch(n,r).then(o=>o.json()).then(o=>(this.incrementPage(),o.articles))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(r){this.searchQuery=r}}const s={articlesContainer:document.querySelector(".js-articles-container")};function i(e){const r=`
        <li>
            <a href="${e.url}" target ="blank" rel="noopener noreferrer">
                <article>
                    <img src="${e.urlToImage}" alt="" width="480">
                    <h2>${e.title}</h2>
                    <p>Posted by: ${e.author}</p>
                    <p>${e.description}</p>
                </article>
            </a>
        </li>
`;return s.articlesContainer.insertAdjacentHTML("beforeend",r)}console.log("page 04");const a={searchForm:document.querySelector(".js-search-form"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},t=new c;a.searchForm.addEventListener("submit",l);a.loadMoreBtn.addEventListener("click",h);function l(e){e.preventDefault(),t.query=e.currentTarget.elements.query.value,t.resetPage(),t.fetchArticles().then(r=>{console.log(r[0].url),console.log(r[0].urlToImage);const n=r.map(i);console.log(n)})}function h(){t.fetchArticles().then(e=>console.log(e))}
//# sourceMappingURL=page-4.js.map
