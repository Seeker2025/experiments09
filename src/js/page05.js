console.log('page 05');
import { forMarkup } from './p5_class';

// console.log(forMarkup);

// const newOneP05 = new forMarkup('.box__05');
const newOneP05 = new forMarkup('.box__05', 'li_05', 'li');

// console.log(newOneP05);
// console.log(newLi);
// console.log(newOneP05.refs.elem);
// console.log(newOneP05.refs.one);

const arr = [1, 2, 3];

const domItems = arr.map(itm => {
    let newOneP05 = new forMarkup('.box__05', 'li_05', 'li');
    console.log(itm);
    const el02 = newOneP05.refs.one;
    el02.textContent= itm;
    return el02;

    // let al03 = null;
    // al03 = document.createElement('li');
    // al03.classList.add('li_05');
    // return al03;

});
   
const ulCont = document.querySelector('.box__05');


console.log(domItems);
// console.log(domItems.length);
// // console.log(domItems[0]);

// const arr02 = ['li', 'li', 'li'];
// console.log(arr02);
newOneP05.refs.elem_ul.append(...domItems);
// console.log(newOneP05.refs.elem_ul);
console.log(ulCont);
