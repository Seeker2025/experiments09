import"./assets/styles-BqxtG7N5.js";const l="c7cfa9764acc40e0977baf4dd8dae782";class h{constructor(){this.searchQuery="",this.page=1}fetchArticles(){console.log(this);const e={headers:{Authorization:l}},r=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;return fetch(r,e).then(s=>s.json()).then(s=>(this.incrementPage(),s.articles))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}}class o{constructor({selector:e}){this.refs=this.getRefs(e)}getRefs(e){const r={};return r.button=document.querySelector(e),r}show(){this.refs.button.classList.remove("is-hidden")}hide(){this.refs.button.classList.add("is-hidden")}}const a={articlesContainer:document.querySelector(".js-articles-container")};function c(t){const e=`
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
`;return a.articlesContainer.insertAdjacentHTML("beforeend",e)}function u(){a.articlesContainer.innerHTML=""}console.log("page 04");console.log(o);const i={searchForm:document.querySelector(".js-search-form"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},n=new h;new o({selector:'[data-action="load-more"]'});i.searchForm.addEventListener("submit",d);i.loadMoreBtn.addEventListener("click",p);function d(t){if(t.preventDefault(),u(),n.query=t.currentTarget.elements.query.value,n.resetPage(),n.query===" ")return alert("Введіть щось");n.fetchArticles().then(e=>{e.map(r=>{c(r)})})}function p(){n.fetchArticles().then(t=>{t.map(e=>{c(e)})})}
//# sourceMappingURL=page-4.js.map
