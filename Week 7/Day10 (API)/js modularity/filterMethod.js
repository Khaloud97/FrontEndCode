
console.log("====================filter Item===========================")
const item=[
    {name:'Lab',price:200},
    {name:'Bicke',price:50},
    {name:'Speeker',price:27},
    {name:'Speeker',price:33},
    {name:'Phone',price:194}
]
const findItem = item.filter((item)=>{
    return item.price <100

})

console.log(findItem);


console.log("====================Map Item===========================")

const MapItem = item.map((item)=>{
    return item.price 

})

console.log(MapItem);

console.log("====================find Item===========================")

const FindItem = item.find((item)=>{
    return item.name =='Speeker';

})

console.log(FindItem);