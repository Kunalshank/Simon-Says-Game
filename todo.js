let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){

    //list me add karne ke liye web page par hi
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);

    // jitna v element add ho raha hai todo app me sab ke sath delete button aaye iske liye :-

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("Delete");
    item.appendChild(delbtn);


    // console.log(inp.value); //console me print karne ke liye
    inp.value="";//ek baar likne ke baad placehoder empty ho jaae aur hmlogo ko backspace se clear na karna pare 
   
});


//EVENT DELEGATION--bubbling concept use kar rahe hai hai todo app me items ko delete kare ke liye 

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){   //event.target means kis chiz ko abhi press kiya jaa raha hai,,, kiske wajah se abhi item abhi trigger ho raha hai
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
    
});

// one more method for delete item----delete button kaam karane ke liye mtlb delete button click karne se item delete ho jaae

// let delbtns=document.querySelectorAll(".Delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }