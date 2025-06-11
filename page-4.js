import"./assets/styles-O95wUiJ_.js";const i="c7cfa9764acc40e0977baf4dd8dae782";class h{constructor(){this.searchQuery="",this.page=1}fetchArticles(){console.log(this);const e={headers:{Authorization:i}},r=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;return fetch(r,e).then(s=>s.json()).then(s=>(this.incrementPage(),s.articles))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}}class l{constructor({selector:e,hidden:r=!1}){this.refs=this.getRefs(e),r&&this.hide()}getRefs(e){const r={};return r.button=document.querySelector(e),r}show(){this.refs.button.classList.remove("is-hidden")}hide(){this.refs.button.classList.add("is-hidden")}}const a={articlesContainer:document.querySelector(".js-articles-container")};function o(t){const e=`
        <li class="li_back">
            <a href="${t.url}" target ="blank" rel="noopener noreferrer">
                <article>
                    <img src="${t.urlToImage}" alt="" width="480" >
                    <h2 class="title_h2">${t.title}</h2>
                    <p>Posted by: ${t.author}</p>
                    <p>${t.description}</p>
                </article>
            </a>
        </li>
`;return a.articlesContainer.insertAdjacentHTML("beforeend",e)}function u(){a.articlesContainer.innerHTML=""}console.log("page 04");const c={searchForm:document.querySelector(".js-search-form"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},n=new h,d=new l({selector:'[data-action="load-more"]',hidden:!0});c.searchForm.addEventListener("submit",p);c.loadMoreBtn.addEventListener("click",f);function p(t){if(t.preventDefault(),u(),n.query=t.currentTarget.elements.query.value,n.resetPage(),n.query===" ")return alert("Введіть щось");n.fetchArticles().then(e=>{e.map(r=>{o(r),d.show()})})}function f(){n.fetchArticles().then(t=>{t.map(e=>{o(e)})})}
//# sourceMappingURL=page-4.js.map
