console.log('page 07. Infinite scroll');
////// нескінченний скролл
// console.log('d');


// const classRick = new markUpP06();
// classRick.markUpP06;
// const makeDom = x => document.querySelector(x);
// const refP06 = {
//     refBtn: makeDom('button[type="button"]'),
//     count: 1,
// }
// console.log(refP06.refBtn);

let counter = 1;

function getState(){
  
    fetch(`https://rickandmortyapi.com/api/character/?page=${counter}`)
    .then(response=>response.json())
    .then(data => {
        // console.log(data);
        const{results: dataArray}=data
        // const classRick = new markUpP06(dataArray);
        // classRick.toAddOne();
        // classRick.toAddOne();
        // console.log(classRick.count01);
            // const markUp = classRick.toRick;
            // console.log(classRick.toRick);
        const markUp = dataArray.map(item=>{
            return  `
            <li>
               <img src="${item.image}" alt="">
               <p>NAME: ${item.name}</p>
               <p>GENDER: ${item.gender}</p>
               <p>ID: ${item.id}</p>
               <p>STATUS: ${item.status}</p>
               <p>CREATED: ${item.created}</p>
            </li>
                `
        }).join('');
        document.querySelector('.characterList').innerHTML += markUp;

        counter++; //// counter += 1 //////one and the same
        
})
}
    getState();
window.addEventListener('scroll', ()=>{
    const { scrollHeight, scrollTop, clientHeight }=document.documentElement
    if(scrollHeight - clientHeight === scrollTop);
    getState();
})
// refP06.refBtn.addEventListener('click', loadMore);

// function loadMore(){
//     //  const classRick = new markUpP06();
//     refP06.count += 1;
//     console.log(refP06.count);
   
//      getSate(refP06.count);
//     // classRick.toAddOne();
 
// }
   
