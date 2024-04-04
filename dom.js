// let smallImages=document.getElementsByClassName("oldImg") ;

// for(let i=0;i<smallImages.length;i++){
//     console.dir(smallImages[i].src);
// }


// let smallImages=document.getElementsByClassName("oldImg") ;

// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src="spidy.jpg";
//     console.log(`value of image no.${i} is changed`);
// }


//QUERY SELECTOR

// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));


// console.dir(document.querySelectorAll("div a"));


//MANIPULATING STYLE

let links=document.querySelectorAll(".box a");

for(link of links){
    link.style.color="purple";
}


// for(let i=0;i<links.length;i++){
//     links[i].style.color="green";
// }