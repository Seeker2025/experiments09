import"./assets/styles-DVYB7QxO.js";class o{constructor(){this.searchQuery="",this.page=1}fetchArticles(){console.log(this);const t={headers:{Authorization:"c7cfa9764acc40e0977baf4dd8dae782"}},n=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;return fetch(n,t).then(a=>a.json()).then(a=>(this.incrementPage(),a.articles))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(t){this.searchQuery=t}}const i={articlesContainer:document.querySelector(".js-articles-container")};function s(e){const t=`
        <li class="li_back">
            <a href="${e.url}" target ="blank" rel="noopener noreferrer">
                <article>
                    <img src="${e.urlToImage}" alt="" width="480" >
                    <h2 class="title_h2">${e.title}</h2>
                    <p>Posted by: ${e.author}</p>
                    <p>${e.description}</p>
                </article>
            </a>
        </li>
`;return i.articlesContainer.insertAdjacentHTML("beforeend",t)}console.log("page 04");const c={searchForm:document.querySelector(".js-search-form"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},r=new o;c.searchForm.addEventListener("submit",h);c.loadMoreBtn.addEventListener("click",l);function h(e){e.preventDefault(),r.query=e.currentTarget.elements.query.value,r.resetPage(),r.fetchArticles().then(t=>{t.map(n=>{s(n)})})}function l(){r.fetchArticles().then(e=>{e.map(t=>{s(t)})})}
//# sourceMappingURL=page-4.js.map
