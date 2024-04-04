// function getsum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++)
//     {
//         sum=sum+i;
       
//     }
//     return sum;
// }
// getsum(10);
// console.log(getsum);



//array concatenation

let str=["hi" , "hello" ,"bye"]

function concat(str)
{
    let result="";
    for(let i=0;i<str.length;i++)
    {
        result+=str[i];
    }
    return result;
}