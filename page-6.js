import"./assets/styles-Nt7tdjrk.js";class n{constructor(c){this.toRick=this.toRick(c)}toRick(c){return c.map(t=>`
            <li>
               <img src="${t.image}" alt="">
               <p>NAME:${t.name}</p>
               <p>GENDER:${t.gender}</p>
               <p>ID: ${t.id}</p>
               <p>STATUS: ${t.status}</p>
               <p>CREATED: ${t.created}</p>
            </li>
                `).join("")}}console.log("page 06. Rick and Morty");function o(){fetch("https://rickandmortyapi.com/api/character").then(r=>r.json()).then(r=>{const{results:c}=r,a=new n(c).toRick;document.querySelector(".characterList").innerHTML+=a})}o();
//# sourceMappingURL=page-6.js.map
