let url= "http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");
btn.addEventListener("click", async() => {
    let country=document.querySelector("input").value;  //is line ka mtlb e hai ki input me jo v country ka name likhenge usko console me print kar dega aur uska colleges ko v
    console.log(country);

    
    let colArr =await getcolleges(country); //colarr = college array
    // console.log(colArr);

    show(colArr);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText=""; // list ko baar baar empty karne ke liye
    for(col of colArr){
        console.log(col.name); 

        let li=document.createElement("li");  //list item crete ho rah hai is line se
        li.innerText = col.name; // text ke naam ke andar colleges ka namm likh rahe hai
        list.appendChild(li); // list ke andar append kar rahe hai
    }
}



async function getcolleges(country) {
    try{
        let res=await axios.get(url+country);
        return res.data;

    }catch(e){
        console.log("Error :",e);
        return [];
    }
}