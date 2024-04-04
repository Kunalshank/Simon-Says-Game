// let url="https://catfact.ninja/fact";

// fetch(url)

// .then( (res) => {
//     return res.json();
// })
// .then( (data) => {
//     console.log("data1 :",data.fact);
//     return fetch(url);
// })
// .then( (res) => {
//     return res.json();
// })
// .then( (data2) => {
//     console.log("data2 :", data2.fact);
// })

// .catch ((err) => {
//     console.log("Error =",err);
// });




// USING FETCH WITH ASYNC

// let url="https://catfact.ninja/fact";
// async function getfacts(){
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//         console.log(data.fact);
//     } catch (e) {
//     console.log("error :",e);
// }
// }



//AXIOS


// let url="https://catfact.ninja/fact";
// async function getfacts(){
//     try{
//         let res=await axios.get(url);
//         console.log(res.data.fact);
//     } catch (e) {
//     console.log("error :",e);
// }
// }


// web page me fact print ho..

// let btn=document.querySelector("button");

// btn.addEventListener("click", async() => {    //basically getfacts() asynchronous function hai await ko use karne ke liye is wale function(addeventlistener) ko asynchronous bana diye..ye tab tak wait karega jab tak ye fact return nghi karega 
//     let fact= await  getfacts();
//     console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText = fact;
// });

// let url="https://catfact.ninja/fact";
// async function getfacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("error :-" ,e);
//     return "No Fact Found";
// }
// }





// DOG IMAGE USING API in the web page

let btn=document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async() => {    //basically getfacts() asynchronous function hai await ko use karne ke liye is wale function(addeventlistener) ko asynchronous bana diye..ye tab tak wait karega jab tak ye fact return nghi karega 
    let link= await  getImage();
    console.log(link);
    let img=document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link);
});


async function getImage(){
    try{
        let res=await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error :-" ,e);
    return "/";
}
}
