
//================using fetch:==============================
// const url="https://api.github.com/users/";
// let userInput= prompt("Enter your github UseName:");

// fetch(url +userInput)
// .then(respone => respone.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))
//================other way:===================================
// let userInput= prompt("Enter your github UseName:");
// const url =`https://api.github.com/users/${userInput}`;
// fetch(url)
//    .then(respone => respone.json())
//    .then(json => console.log(json))
//    .catch(err => console.log(err))


//================using fetch ith function:==============================
let userInput= prompt("Enter your github UseName:");
const url =`https://api.github.com/users/${userInput}`;
//const url =`https://api.instagram.com/v1/users/${userInput}`;

async function LoodData(){
    let obj= await fetch(url);
    let dtt= await obj.json();
    await console.log(dtt);
    document.querySelector("#main").innerHTML =`<img src="${dtt.avatar_url}" alt="Avatar">`;


}
LoodData();



