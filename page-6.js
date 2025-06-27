import"./assets/styles-DQ82frmz.js";class a{constructor(c){this.toRick=this.toRick(c)}toRick(c){return c.map(t=>`
            <li>
               <img src="${t.image}" alt="">
               <p>NAME: ${t.name}</p>
               <p>GENDER: ${t.gender}</p>
               <p>ID: ${t.id}</p>
               <p>STATUS: ${t.status}</p>
               <p>CREATED: ${t.created}</p>
            </li>
                `).join("")}}console.log("page 06. Rick and Morty");const s=o=>document.querySelector(o),n={refBtn:s('button[type="button"]'),count:1};function e(o){fetch(`https://rickandmortyapi.com/api/character/?page=${o}`).then(c=>c.json()).then(c=>{const{results:t}=c,r=new a(t).toRick;document.querySelector(".characterList").innerHTML+=r})}e();n.refBtn.addEventListener("click",i);function i(){n.count+=1,console.log(n.count),e(n.count)}
//# sourceMappingURL=page-6.js.map
