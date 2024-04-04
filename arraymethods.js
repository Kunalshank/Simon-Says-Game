// let arr=[1,2,3,4,5];
// arr.forEach(function(element)
// {
//     console.log(element);
// });


//Rest
function sum(...args){
    for(let i=0;i<args.length;i++)
    {
        console.log("you gave us :",args[i]);
    }
}