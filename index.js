let increment =()=>{
    console.log("Increment func called");
    let vary =document.getElementById("vary")
    vary.innerText=(+vary.innerText)+1;
}
let decrement =()=>{
    console.log("Decrement func called");
    let vary =document.getElementById("vary")
    vary.innerText=(+vary.innerText)-1;
}

let reset=()=>{
    console.log("reset function called");
    let vary =document.getElementById("vary")
    vary.innerText=0;


}