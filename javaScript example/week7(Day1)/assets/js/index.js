//Document Object Model

//console.log(document.getElementsByTagName("div"));

let tgeName =document.getElementsByTagName("div");
let ClassName =document.getElementsByClassName("sec");
let ById =document.getElementById("uni");

console.log(tgeName);
console.log(ClassName);
console.log(ById);


ById.style.backgroundColor ="coral";

//if i click on this place the style of <p> backgroundColor will pe change to purple and the width of it will be 50%.
ById.addEventListener("click", ()=>{
    ById.style.backgroundColor ="purple";
    ById.style.width ="50%";
});

tgeName[0].addEventListener("click", ()=>{
    tgeName.style.backgroundColor ="purple";
    tgeName.style.width ="50%";
});

let userName =document.getElementById("userName");
userName.addEventListener("change", (e)=>{
    console.log(e.target.value);

});


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let flag =false;

ById.addEventListener("click", (e)=>{
    console.log(e.target.ClassName);
    console.log(e.target);
    if(e.target.ClassName== "headd" && flag==false){
        ById.style.backgroundColor ="purple";
        ById.style.width ="50%";
        flag = true;
    }else{
    ById.style.backgroundColor ="white";
    ById.style.width ="100%";
    flag = false;}
});
