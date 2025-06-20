console.log('page 06. Rick and Morty');

import { markUpP06 } from './p6_class.js';

// const classRick = new markUpP06('Rick_02');
// classRick.markUpP06;

function getDate(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(response=>response.json())
    .then(data => {
        
        const{results: dataArray}=data
        const classRick = new markUpP06(dataArray);
            const markUp = classRick.toRick;
            // console.log(classRick.toRick);
        // const markUp = dataArray.map(item=>{
        //     return  `
        //     <li>
        //        <img src="${item.image}" alt="">
        //        <p>NAME:${item.name}</p>
        //        <p>GENDER:${item.gender}</p>
        //        <p>ID: ${item.id}</p>
        //        <p>STATUS: ${item.status}</p>
        //        <p>CREATED: ${item.created}</p>
        //     </li>
        //         `
        // }).join('');
        document.querySelector('.characterList').innerHTML += markUp;
})
}

getDate();