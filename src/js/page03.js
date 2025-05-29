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

let colors = [
    {id: 0, hex: '#f44336', rgb: '244,67,54', },
    {id: 1, hex: '#C63E68', rgb: '198,62,104', },
    {id: 2, hex: '#AC1E9E', rgb: '172,30,15', },
    {id: 3, hex: '#3AE779', rgb: '58,231,121', },
    {id: 4, hex: '#BE4B57', rgb: '190,75,87', },
    {id: 5, hex: '#550943', rgb: '85,9,67', },
    {id: 6, hex: '#B7E8EE', rgb: '183,232,238', },
    {id: 7, hex: '#A0F00E', rgb: '160,240,14', },
    {id: 8, hex: '#4F1AC5', rgb: '79,26,197', },
    {id: 9, hex: '#657E3E', rgb: '101,126,62', },
];

const contSqu = document.querySelector('.container_page_03');
const btn = document.querySelector('.btn_next_color');

let lineString = null;
    btn.addEventListener('click', toShift)

    function toShift(){
        if(colors.lenth!==0) console.log('peace');
         
    let theOne = colors.shift();
    // console.log(theOne);
    colors.push(theOne);
    
    
    console.log(colors);
// console.log(ooo);
 }

//  toShift();
//  toShift();
//  toShift();

// console.log(btn);
 function addSquare(colors){
    let strRef;
    return strRef = colors.map((itm, idx)=>{
        
    return `<div class="otherSquare" style = "background-color: ${itm.hex}">${itm.id}</div>`
      
}).join('');
}

lineString = addSquare(colors);
contSqu.insertAdjacentHTML('beforeend', lineString);   



    




