// let btn=document.querySelector("button");
// console.dir("btn");


// btn.onclick=function(){
// console.log("button was clicked");
// };

// let btns=document.querySelectorAll("buttons");
// for(btn of btns){
//     btn.onclick=sayhello;

// }
// function sayhello(){
//     alert("hii mr kunal");
// };


//ADD EVENT LITENER 

let btns=document.querySelectorAll("buttons");
for(btn of btns){
    btn.addEventListener("clicked",sayhello);
    btn.addEventListener("clicked",sayname);

}
function sayhello(){
    alert("hii mr kunal");
};
function sayname(){
    alert("apna college");
};