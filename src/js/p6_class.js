export class markUpP06{
    constructor(a){
        this.toRick = this.toRick(a);
    }
    toRick(a){
       let markUp = null;
       return markUp = a.map(item=>{
            return  `
            <li>
               <img src="${item.image}" alt="">
               <p>NAME:${item.name}</p>
               <p>GENDER:${item.gender}</p>
               <p>ID: ${item.id}</p>
               <p>STATUS: ${item.status}</p>
               <p>CREATED: ${item.created}</p>
            </li>
                `
        }).join('');
       
    }
}