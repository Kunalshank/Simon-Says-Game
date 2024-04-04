let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelector("lis");


div.addEventListener("click",function(){
    console.log("div was clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();//stop inheriting to its parent,...it stop after completion of ul it will not inherit its parent
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("list was clicked");
    });
}
