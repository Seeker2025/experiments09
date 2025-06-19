import"./assets/styles-Nt7tdjrk.js";console.log("page 06");function n(){fetch("https://rickandmortyapi.com/api/character").then(r=>r.json()).then(r=>{const{results:t}=r;console.log(t);const e=t.map(a=>`
            <li>
               <img src="${a.image}" alt="">
               <p>NAME:${a.name}</p>
               <p>GENDER:${a.gender}</p>
               <p>ID: ${a.id}</p>
               <p>STATUS: ${a.status}</p>
               <p>CREATED: ${a.created}</p>
            </li>
                `).join("");document.querySelector(".characterList").innerHTML=e})}n();
//# sourceMappingURL=page-6.js.map
