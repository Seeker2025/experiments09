import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                         */console.log("page 02");const e={cardConainer:document.querySelector(".js-card-container")};fetch("https://pokeapi.co/api/pokemon/2").then(o=>o.json()).then(o=>{console.log(o);const n=pokemonCardTpl(o);e.cardConainerardContainer.innerHTML=n}).catch(o=>{console.log(o)});
//# sourceMappingURL=page-2.js.map
