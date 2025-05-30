console.log('page 03 Add color square');

// import '../css/page03.css';

const arr=[1, 2, 3,];
// const arr02=[arr.indexOf(1), arr.indexOf(2), arr.indexOf(3)];
function addToArr(){
    arr.shift();
    arr.push(arr[arr.length-1]+1);
}
// indexOf();
addToArr(); ////// [2, 3, 4]
addToArr(); ////// [3, 4, 5]
addToArr(); ////// [4, 5, 6]
addToArr(); ////// [5, 6, 7]
// console.log(arr);
/*
/////// /////// /////
/////// /////// /////
/////// /////// /////
/////// /////// /////
/////// /////// /////
/////// /////// /////
/////// /////// /////
*/

const colors = [
    {id: '00', hex: '#f44336' },
    {id: '01', hex: '#C63E68' },
    {id: '02', hex: '#AC1E9E' },
    {id: '03', hex: '#3AE779' },
    {id: '04', hex: '#BE4B57' },
    {id: '05', hex: '#550943' },
    {id: '06', hex: '#B7E8EE' },
    {id: '07', hex: '#A0F00E' },
    {id: '08', hex: '#4F1AC5' },
    {id: '09', hex: '#657E3E' },
    {id: '10', hex: '#FF0000' },
    {id: '11', hex: '#FF8C00' },
    {id: '12', hex: '#FFFF00' },
];

const contSqu = document.querySelector('.container_page_03');
const btn = document.querySelector('.btn_next_color');

let lineString = null;
    btn.addEventListener('click', toShift);

    // console.log(colors);

    lineString = addSquare(colors);
    contSqu.insertAdjacentHTML('beforeend', lineString);  

    function toShift(){
      
        contSqu.textContent = '';   
         
        let theOne = colors.shift();
        colors.push(theOne);
        // console.log(theOne);
        console.log(colors);

        lineString = addSquare(colors);
        contSqu.insertAdjacentHTML('beforeend', lineString);  
     }
//  toShift();
//  toShift();
//  toShift();

 function addSquare(colors){
    let strRef;
 return strRef = colors.map((itm, idx)=>{
 return `<div class="otherSquare" style = "background-color: ${itm.hex}">${itm.id}</div>`
      
}).join('');
}





    




