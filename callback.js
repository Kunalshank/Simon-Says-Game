//CALLBACK HELL

// function savetoDB(data,success,failure){
//     let internetspeed=Math.floor(Math.random() * 10) + 1;
//     if(internetspeed >4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetoDB("apna college",() =>{
//     console.log("success: your data was saved");
//     //pahle data success me aa gya toh week wala ko store hi nhi karayenge...pahle apna college wala data save hoga tab jaakr dusra data hello world wala save hoga

//     //ye sab callback hell hai ..nesting callback chal raha hai
// // call simple work kar raha hai ek work ho jaa raha hai toh usko store kar do wo ho jaa raha hai toh next wala store kar do...bich me kahi v week connection ho jaa rahahai toh stop kar do

//     savetoDB("hello world",()=> {
//         console.log("success2:data2 saved");
//         savetoDB("kunal",() =>{
//             console.log("success3: data 3 is saved");
//         },
//         ()=>{
//             console.log("failure3:weak3 connection");
//         });
//     },() => {
//         console.log("failure2 : weak connection");
//     });

// },
// () => {
//     console.log("failure:weak connection");
// });



//  PROMISE:-RESOLVE AND REJECT...CALLBACK HELL KA CODE KO CHOTA KARTA HAI AND KAHTA HAI KI AUR PROMISE KARTA HAI KI KHUCH N KHUCH RESULT DEGA : SUCCESS YA FAILURE


    // function savetoDb(data){
    //     return new Promise((resolve,reject) => {
    //         let internetspeed=Math.floor(Math.random() *10) +1;
    //         if(internetspeed>4)
    //         {
    //             resolve("success :data was saved");
    //         }
    //         else{
    //             reject("failure:weak connection");
    //         }
    //     });
    // }

    // savetoDb("apna college")
    // .then( () => {
    //     console.log("promise was resolve");
    // })
    // .catch( () => {
    //     console.log("Promise was rejectd");
    // });

    // ye code jo niche likha hua hai wo bilkul call back hell jaisa kaam kar raha hai

    // savetoDb("apna college")
    // .then( () => {
    //     console.log("Data1 was saved");
    //     return savetoDb("hello world"); //ye is liye likh rahe becz next wala then execute ho paaye ye jo hello world return kar rah hai wo savetoDb me store hoga aur then me v next wala then execute hoga
    // })
    // .then( () => {
    //     console.log("data 2 was saved");
    //     return savetoDb("Kunal Kumar");
    // })

    // .then( () => {
    //     console.log("Data3 was saved");
    // })
    // .catch( () => {
    //     console.log("Promise was rejectd");
    // });




    //refactoring old CODE MEANS WE APPLYPROMISES TO OUR CALL BACK HELL


    //  let h1=document.querySelector("h1");

    //  function changeColor(color,delay){
    //      return new Promise((resolve,reject)=> {
    //          setTimeout ( () => {
    //              h1.style.color=color;
    //                 console.log(`color changed to ${color}`);
    //              resolve("color changed");
    //          },delay);
    //      });
    // }

    // BY USING AWAIT AND ASYNC KEYWORD WE CAN MIMIMIZE THE BELOW CODE TO SOME LINE

    // async function demo() {
    //     await changeColor("red",1000);
    //     await changeColor("orange",1000);
    //     await changeColor("green",1000);
    //     changeColor("blue",1000);
    // }

    //OR


    // changeColor("red",1000)
    // .then( () => {
    //     console.log("red color was completed");
    //     return changeColor("orange",1000);
    // })
    // .then( () => {
    //     console.log("orange color was completed");
    //     return changeColor("green",1000);
    // })
    // .then( () => {
    //     console.log("grren color was completed");
        
    // });




    // ASYNC FUNCTION

    //....ASYNC KEYWORD

    // async function greet(){
    //     throw "404 page not found";
    //     return "hello";
    // }
    // greet()
    // .then( (result) =>{
    //     console.log("promise was resolved");
    //     console.log("result was :", result);
    // })

    // .catch( (error) => {
    //     console.log("promise was rejected with error :", error);
    // });



    // AWAIT KEYWORD


    // function getnum(){
    //     return new Promise((resolve,reject) => {
    //         setTimeout( () => {
    //             let num=Math.floor(Math.random() * 10)+1;
    //             console.log(num);
    //             resolve();
    //         },1000);
    //     });
    // }

    // async function demo(){
    //     await getnum();
    //     await getnum();
    //     getnum();
    // }




    // HANDLING REJECTION BY AWAIT BY TRY AND CATCH METHOD


    let h1=document.querySelector("h1");

     function changeColor(color,delay){
         return new Promise((resolve,reject)=> {
             setTimeout ( () => {
                let num=Math.floor(Math.random()* 5)+1;  //for rejection purpose we have to give the condintioion where he failed after
                
                if(num>3){
                    reject("promise was rejected");
                }
                 h1.style.color=color;
                    console.log(`color changed to ${color}`);
                 resolve("color changed");
             },delay);
         });
    }


    async function demo() {
        try{
            await changeColor("red",1000);
            await changeColor("orange",1000);
            await changeColor("green",1000);
            await changeColor("blue",1000);
        }catch(err){
            console.log("error caught");
            console.log(err);
        }
        let a=5;
        console.log(a);
    
        
    }
