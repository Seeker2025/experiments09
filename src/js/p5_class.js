export class forMarkup{
    constructor(selector){
        this.refs = this.toObj(selector);
        // this.refs = this.toExp();
    }
    toObj(selector){

         const isObj = {};
         isObj.one = document.createElement('li');
         isObj.elem_ul = document.querySelector(selector);
         return isObj;

    }
    toNewElem(num){
        
         this.refs.one.classList.add('li_05');
         this.refs.one.textContent = num;
        // console.log(this.refs.one);
        // return this.isObj.one;
    }

    toExp(){
        let a = 'a';
        return 'a';
    }

}