let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);



//ANS 2

button.setAttribute("id","btn");
input.setAttribute("placehoder","username");


//ANS 3

let btn=document.querySelector("#btn");
btn.classList.add("btnStyle");
document.querySelector("body").append(btn);

//ANS 4

let h1=document.createElement("h1");
h1.innerText="DOM Practice";

document.querySelector("body").append(h1);

h1.classList.add("purple")


//ANS 5

let p=document.createElement('p');
p.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);
