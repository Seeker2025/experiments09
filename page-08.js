import"./assets/styles-q4qmUVT2.js";console.log("page 08");const s=document.querySelector(".js-search"),a=document.querySelector(".js-list");s.addEventListener("submit",l);function l(t){t.preventDefault(),console.log(t.currentTarget.elements);const{query:n,days:o}=t.currentTarget.elements;i(n.value,o.value).then(e=>{console.log(e.forecast.forecastday),a.innerHTML="",u(e.forecast.forecastday)}).catch(e=>console.log(e))}function i(t,n){const o="http://api.weatherapi.com/v1",e="65fc8710104c48e595e140016252406",c=new URLSearchParams({key:e,q:t,days:n,lang:"uk"});return fetch(`${o}/forecast.json?${c}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function u(t){const n=t.map(({date:o,day:{avgtemp_c:e,condition:{text:c,icon:r}}})=>`
            <li class="p8_li">
                <img src="${r}" alt="${c}">
                <p>${c}</p>
                <h2>${o}</h2>
                <h3>${e}</h3>
            </li>
        `).join("");return a.insertAdjacentHTML("beforeend",n)}
//# sourceMappingURL=page-08.js.map
