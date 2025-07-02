import"./assets/styles-q4qmUVT2.js";console.log("page 10. Observer");const u=document.querySelector("ul.js-list");document.querySelector('[type="button"]');const c=document.querySelector(".js-guard");let r=1;var a={root:null,rootMargin:"200px",threshold:1},g=new IntersectionObserver(d,a);function d(e,t){e.forEach(n=>{n.isIntersecting&&(console.log(e),r+=1,l(r).then(o=>{i(o.results),o.page===o.total_pages&&t.unobserve(c)}).catch(o=>console.log(o)))})}const f="https://api.themoviedb.org/3/",h="trending/movie/day",b="3af5fd0b838bf2a259ff06cb75968037";function l(e=1){return fetch(`${f}${h}?api_key=${b}&page=${e}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}l().then(e=>{i(e.results),g.observe(c)}).catch(e=>console.log(e));function i(e){let t=null;return t=e.map(({poster_path:n,title:o})=>`
         <li class="box_09">
<img src="https://image.tmdb.org/t/p/w400${n}" title=${o}>
            <h2>${o}<h2>
         </li>
    `),u.insertAdjacentHTML("beforeend",t)}let s=1;window.addEventListener("scroll",p);function p(){s+=1,console.log(s)}
//# sourceMappingURL=page-10.js.map
