// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
      


async function GetDetailedProdect (id){
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const detailed = await response.json();
    return detailed;
}

let uservalue =Number(prompt("enter prodect id"))
let pro =  GetDetailedProdect(uservalue)
console.log(pro)