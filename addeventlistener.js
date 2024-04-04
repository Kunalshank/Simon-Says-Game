// let p=documrnt.querySelector("p");

// p.addEventListener("click",function (){
//     console.log("para was clicked");
// });

// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("Div is hovered");
// });

 
// THIS IN EVENT LISTENER

// let btn=document.querySelector("btn");
// let p=document.querySelector("p");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");

// function changecolor(){
//     console.dir(this.innerText);//innertext ko nhi v likh skte hai uske property jannne ke liye likh rhe hai
//     this.style.backgroundColor="blue";

// }
// btn.addEventListener("click",changecolor);

// p.addEventListener("click",changecolor);

// h1.addEventListener("click",changecolor);

// h3.addEventListener("click",changecolor);


 //keyboard EVENTS



//  let inp=document.querySelector("input");

//  inp.addEventListener("keydown",function(){
//     console.log("Key was Pressed");
//  });

// inp.addEventListener("keyup",function(){
//     console.log("Key was Released ");
//  });

//  inp.addEventListener("keydown",function(event){
//     console.log("key = ",event.key);
//     console.log("code = " ,event.code);
//      console.log("Key was pressed ");
//  });



//CREATE A GAME CHARACTER BY TYPING UP,DOWN ,UPWARD,LEFT



// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("code=",event.code);//ArrowUP(U),ArrowDown(D),ArrowRight(R),Arrowleft(L)
//     if(event.code=="KeyU"){
//         console.log("charater moves up")
//     }
//     else if(event.code=="KeyD")
//     {
//         console.log("character moves down");
//     }
//     else if(event.code=="KeyL")
//     {
//         console.log("character moves Left");
//     }
//     else if(event.code=="KeyR")
//     {
//         console.log("character moves Right");
//     }
// });



//FORM EVENTS

 
// let form=document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form is submitted successfully") ;
// });


//EXTRACTING FORM DATA

 
//  let form=document.querySelector("form");

//  form.addEventListener("submit",function(event){
//      event.preventDefault();
   
//      let user=document.querySelector("#user");
//      let pass=document.querySelector("#pass");

//      console.log(user.value);
//      console.log(pass.value);

//  });


//MORE EVENTS

//CHANGE EVENT

let form=document.querySelector("form");

 form.addEventListener("submit",function(event){
          event.preventDefault();
 });

 let user=document.querySelector("#user");

 user.addEventListener("change",function(){
    console.log("changed event");
    console.log("final value =", this.value);
 }); 

    //input event :-chote chote event ko track karne ke liye
    user.addEventListener("input",function(){
        console.log("input    event");
        console.log("final value =", this.value);
 });