import"./assets/styles-q4qmUVT2.js";console.log("page 08. Weather");const s=document.querySelector(".js-search"),a=document.querySelector(".js-list");s.addEventListener("submit",l);function l(t){t.preventDefault(),console.log(t.currentTarget.elements);const{query:c,days:o}=t.currentTarget.elements;console.log(o.value);let n=Number(o.value);console.log(typeof n),u(c.value,n).then(e=>{console.log(e.forecast.forecastday),a.innerHTML="",i(e.forecast.forecastday)}).catch(e=>console.log(e))}function u(t,c){const o="https://api.weatherapi.com/v1",n="65fc8710104c48e595e140016252406",e=new URLSearchParams({key:n,q:t,days:c,lang:"uk"});return fetch(`${o}/forecast.json?${e}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function i(t){const c=t.map(({date:o,day:{avgtemp_c:n,condition:{text:e,icon:r}}})=>`
            <li class="p8_li">
                <img src="${r}" alt="${e}">
                <p>${e}</p>
                <h2>${o}</h2>
                <h3>${n}</h3>
            </li>
        `).join("");a.insertAdjacentHTML("beforeend",c)}
//# sourceMappingURL=page-08.js.map
