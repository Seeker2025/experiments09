import"./assets/styles-DQ82frmz.js";console.log("page 07. Infinite scroll");let c=1;function o(){fetch(`https://rickandmortyapi.com/api/character/?page=${c}`).then(e=>e.json()).then(e=>{const{results:n}=e,r=n.map(t=>`
            <li>
               <img src="${t.image}" alt="">
               <p>NAME: ${t.name}</p>
               <p>GENDER: ${t.gender}</p>
               <p>ID: ${t.id}</p>
               <p>STATUS: ${t.status}</p>
               <p>CREATED: ${t.created}</p>
            </li>
                `).join("");document.querySelector(".characterList").innerHTML+=r,c++})}o();window.addEventListener("scroll",()=>{const{scrollHeight:e,scrollTop:n,clientHeight:r}=document.documentElement;o()});
//# sourceMappingURL=page-7.js.map
