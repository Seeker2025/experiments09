import"./assets/styles-q4qmUVT2.js";console.log("page 09");const i=document.querySelector("ul.js-list"),n=document.querySelector('[type="button"]');let r=1;n.addEventListener("click",a);function a(){r+=1,c(r).then(e=>{s(e.results),e.page===e.total_pages&&(n.hidden=!0)}).catch(e=>console.log(e))}const u="https://api.themoviedb.org/3/",g="trending/movie/day",d="3af5fd0b838bf2a259ff06cb75968037";function c(e=1){return fetch(`${u}${g}?api_key=${d}&page=${e}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}c().then(e=>{s(e.results),e.page!==e.total_pages&&(n.hidden=!1)}).catch(e=>console.log(e));function s(e){let t=null;return t=e.map(({poster_path:l,title:o})=>`
         <li class="box_09">
<img src="https://image.tmdb.org/t/p/w400${l}" title=${o}>
            <h2>${o}<h2>
         </li>
    `),i.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=page-09.js.map
