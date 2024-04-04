const favmovie="Avatar";
let guess=prompt("guess the movie name");
while((guess !=favmovie) && guess !="quit")
{
    guess=prompt("wrong answer!plz try again letter");
}
if(guess==favmovie){
    console.log("congrats");
}
else
{
    console.log("you quit");
}