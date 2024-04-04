// const student={
//     name:"kunal",
//     age:23,
//     marks:94.4,
//     city:"Delhi"
// };


//guessing the random number quiz

const max=prompt("enter the maximum number");

const random=Math.floor(Math.random() * max)+1;

let guess=prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quitted the game");
        break;
    }
    if(guess == random){
        console.log("you are right congrats !!",random);
        break;
    }
    else if(guess<random){
        guess=prompt("hint:your guess is to small!plz try again");
    }
    else{
        guess=prompt("hint:your guess is to large!plz try again");
    }
    // else{
    //     console.log("wrong answer !! plz try again");
    // }
}