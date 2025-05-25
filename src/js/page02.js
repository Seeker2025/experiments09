console.log('page 02');

import '../css/common.css'

const refs ={
    cardConainer: document.querySelector('.js-card-container'),
};

fetch('https://pokeapi.co/api/pokemon/2')
    .then(response =>{
        return response.json();
    })
    .then(pokemon =>{
        console.log(pokemon);
        const markup = pokemonCardTpl(pokemon);
        refs.cardConainerardContainer.innerHTML = markup;
    })
    .catch(error =>{
        console.log(error);
    })
    
