console.log('page 02. First pokemon');

import '../css/stylePokemon.css'
// import pokemonCardTpl from '../tamlates/pokemon-cards.hbs';

function  renderPokemonCard(pokemon){
    const markup = `
    <div class="card">
        <h2 class="card-text-id">pokemon id:${pokemon.id}</h2>
          <div class="card-img-top">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
          </div>

          <div vlass="card-body">
            <h2 class="card-title">${pokemon.name}</h2>
            <p class="card-text">Вага: ${pokemon.weight}</p>
            <p class="card-text">Зріст: ${pokemon.height}</p>

            <p class="card-text"><b><b/></p>
                <ul class="list-group">
                    <li class="list-group-item"></li>
                </ul>
          </div>
    </div>
    `
    return refs.cardConainer.innerHTML = markup;
};

const refs ={
    cardConainer: document.querySelector('.js-card-container'),
    searcForm: document.querySelector('.js-search-form'),
};
// console.log(refs.cardConainer);
console.log(refs.searcForm);

refs.searcForm.addEventListener('submit', onSearch)

function onSearch(e){
    e.preventDefault();
    
    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;
    fetchPkemon(searchQuery);
    refs.searcForm.reset();
}
 
 function fetchPkemon(pokemonId){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response=>{
    // console.log(response.json());
    return response.json();
})
.then(pokemon=>{
         console.log(pokemon);
        //  console.log(pokemon.name);
        //  console.log(pokemon.sprites.back_default);
    
        // const markup = pokemonCardTpl(pokemon);
        // refs.cardConainer.innerHTML = markup;
        renderPokemonCard(pokemon);
 })
.catch(error=>{
    console.log(error);
    alert('This is a catch!')
 })
 }
    
    
