import"./assets/stylesAll-Cal2oIdQ.js";console.log("page 02. First pokemon");function s(e){const r=`
    <div class="card">
        <h2 class="card-text-id">pokemon id:${e.id}</h2>
          <div class="card-img-top">
            <img src="${e.sprites.front_default}" alt="${e.name}">
          </div>

          <div vlass="card-body">
            <h2 class="card-title">${e.name}</h2>
            <p class="card-text">Вага: ${e.weight}</p>
            <p class="card-text">Зріст: ${e.height}</p>

            <p class="card-text"><b><b/></p>
                <ul class="list-group">
                    <li class="list-group-item"></li>
                </ul>
          </div>
    </div>
    `;return t.cardConainer.innerHTML=r}const t={cardConainer:document.querySelector(".js-card-container"),searcForm:document.querySelector(".js-search-form")};console.log(t.searcForm);t.searcForm.addEventListener("submit",a);function a(e){e.preventDefault();const c=e.currentTarget.elements.query.value;o(c),t.searcForm.reset()}function o(e){fetch(`https://pokeapi.co/api/v2/pokemon/${e}`).then(r=>r.json()).then(r=>{console.log(r),s(r)}).catch(r=>{console.log(r)})}
//# sourceMappingURL=page-2.js.map
