console.log('page 02');

import '../css/common.css'
// import pokemonCardTpl from '../tamlates/pokemon-cards.hbs';

function pokemonCardTpl(pokemon){
    return `
    <div class="card">
          <div class="card-img-top">
            <img src="${pokemon.sprites.front_default}" alt="{{name}}">
          </div>

    </div>
    `
};

const refs ={
    cardConainer: document.querySelector('.js-card-container'),
};
// console.log(refs.cardConainer);

const r = fetch('https://pokeapi.co/api/v2/pokemon/2')
    // .then(response =>{
    //     return response.json();
    // })
    // .then(pokemon =>{
    //     console.log(pokemon);
    //     const markup = pokemonCardTpl(pokemon);
    //     refs.cardConainer.innerHTML = markup;
    // })
    // .catch(error =>{
    //     console.log(error);
    // })
r.then(response=>{
    // console.log(response.json());
    return response.json();
})
.then(pokemon=>{
        //  console.log(pokemon);
        //  console.log(pokemon.name);
        //  console.log(pokemon.sprites.back_default);
    
    const markup = pokemonCardTpl(pokemon);
    refs.cardConainer.innerHTML = markup;
 })
.catch(error=>{
    console.log(error);
 })
    
    
