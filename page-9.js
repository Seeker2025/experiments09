import"./assets/styles-q4qmUVT2.js";console.log("page 09");const l=document.querySelector("ul.js-list"),i=document.querySelector('[type="button"]');let n=1;i.addEventListener("click",u);function u(){n+=1,r(n).then(t=>{c(t.results)}).catch(t=>console.log(t))}const a="https://api.themoviedb.org/3/",d="trending/movie/day",g="3af5fd0b838bf2a259ff06cb75968037";function r(t=1){return fetch(`${a}${d}?api_key=${g}&page=${t}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}r().then(t=>{console.log(t.results),c(t.results)}).catch(t=>console.log(t));function c(t){let e=null;return e=t.map(({poster_path:s,title:o})=>`
         <li class="box_09">
<img src="https://image.tmdb.org/t/p/w400${s}" title=${o}>
            <h2>${o}<h2>
         </li>
    `),l.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=page-9.js.map
