import"./assets/styles-DQ82frmz.js";console.log("page 09");const t="https://api.themoviedb.org/3/",n="trending/movie/day",e="3af5fd0b838bf2a259ff06cb75968037";function c(){return fetch(`${t}${n}?api_key=${e}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}c().then(o=>console.log(o)).catch(o=>console.log(o));
//# sourceMappingURL=page-9.js.map
