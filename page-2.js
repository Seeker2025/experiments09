import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                         */console.log("page 02");function r(o){return`
    <div class="card">
          <div class="card-img-top">
            <img src="${o.sprites.front_default}" alt="{{name}}">
          </div>

    </div>
    `}const e={cardConainer:document.querySelector(".js-card-container")},t=fetch("https://pokeapi.co/api/v2/pokemon/2");t.then(o=>o.json()).then(o=>{const n=r(o);e.cardConainer.innerHTML=n}).catch(o=>{console.log(o)});
//# sourceMappingURL=page-2.js.map
