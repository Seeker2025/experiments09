import"./assets/styles-Nt7tdjrk.js";class o{constructor(c){this.toRick=this.toRick(c)}toRick(c){return console.log(c)}}console.log("page 06. Rick and Morty");const n=new o("Rick_02");n.markUpP06;function e(){fetch("https://rickandmortyapi.com/api/character").then(r=>r.json()).then(r=>{const{results:c}=r,a=c.map(t=>`
            <li>
               <img src="${t.image}" alt="">
               <p>NAME:${t.name}</p>
               <p>GENDER:${t.gender}</p>
               <p>ID: ${t.id}</p>
               <p>STATUS: ${t.status}</p>
               <p>CREATED: ${t.created}</p>
            </li>
                `).join("");document.querySelector(".characterList").innerHTML+=a})}e();
//# sourceMappingURL=page-6.js.map
