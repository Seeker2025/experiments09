export class forMarkup{
    constructor(selector, newSelector, tag){
        this.refs = this.toObj(selector, newSelector, tag);
    }
    toObj(selector, newSelector, tag){
         const isObj = {};
         isObj.elem_ul = document.querySelector(selector);
         isObj.one = document.createElement(tag);
         isObj.one.classList.add(newSelector);
         return isObj;

    }

}