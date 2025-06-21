import"./assets/styles-CS_QUFV1.js";class s{constructor(t){this.toRick=this.toRick(t)}toRick(t){return t.map(o=>`
            <li>
               <img src="${o.image}" alt="">
               <p>NAME:${o.name}</p>
               <p>GENDER:${o.gender}</p>
               <p>ID: ${o.id}</p>
               <p>STATUS: ${o.status}</p>
               <p>CREATED: ${o.created}</p>
            </li>
                `).join("")}}console.log("page 06. Rick and Morty");const a=n=>document.querySelector(n),c={refBtn:a('button[type="button"]'),count:1};console.log(c.refBtn);function e(n){fetch(`https://rickandmortyapi.com/api/character/?page=${n}`).then(t=>t.json()).then(t=>{console.log(t);const{results:o}=t,r=new s(o).toRick;document.querySelector(".characterList").innerHTML+=r})}e();c.refBtn.addEventListener("click",i);function i(){c.count+=1,console.log(c.count),e(c.count)}
//# sourceMappingURL=page-6.js.map
