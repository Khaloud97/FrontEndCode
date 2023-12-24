//one line comment
/*multi  line comment*/

console.log("My first js");

//=========Data type: ==================================
/** 1)number, null ,boolean
 * 2)array ,lest, object,
 * 3) primitive dataType
 * 4) non primitive dataType
 */
//========================================================
// Es5:
var x ="hi";
var x=10;
//-------------
// Es6:
const z = 3.14 //constant 
let y = true;//like var 

//array :
let arr =[1,'a',true,"Hi",3.4];

//....................
let massage1= "Hello World"; 
let massage2= "From JavaScript";
//object of may information:
let obj = {
    name: "Khaloud",
    age: 26,
    address:"Al-Batinh"};

 let allInfo= massage1 +" "+massage2+" "+ obj.name +" "+ obj.age +" "+ obj.address ;

console.log(allInfo);  
console.log(`${massage1} ${massage2} ${obj.name} ${obj.age} ${obj.address}`);  //using backtick
//console.log(massage1);
//console.log(massage2);  
//console.log(obj.name,obj.age ,obj.address);

//========================================================
//Type casting :
let num ="3,14";
let cstnum =Number(num); //String (), Boolean(),Number()
console.log(typeof(cstnum));

//========================================================
//ProtoType:
function Print(){
    console.log("Hello from function")
}
Print();

function PrintLine(){
    return "Hello from return function";
}
console.log(PrintLine());

function Multiply(x , y=1){
    return x*y;
}
console.log(Multiply(3));

function Sum(x , y){
    return x+y;
}
console.log(Sum(3,6));

//=========================== function=================================

let func= function (x,y){
    return x/y;
}
console.log(func(2,3));

// using lamda

let xyz =() => "Hello Khaloud";
console.log(xyz);
//............
//function to chack is the num is even or odd:
function isEven (x){
    return(x% 2 ==0)
}

//....................
//interactive:

alert("website is Hacked to chack isEven");
let userValue = prompt("Enter a number");
alert(isEven(userValue)? "Number is even": "Number is odd")


let flag = confirm("Ary you accept to be hacked");

//=============================== prompt + function + alert ======================================
//function to chack is divisale by 3 or not:
function isDivisale (x){
    return(x% 3 ==0)
}
//interactive:

alert("website is Hacked  to chack is divisale by 3 or not");
let Value = prompt("Enter a number");
alert(isDivisale(Value)? "Number is  divisale by 3": "Number is  Not divisale by 3");


//====================================== Loop =======================================

//while , for , do-while:

//.............for..............
for(let i =1; i <10; i++){
    console.log("*".repeat(i));
}

//.............while..............

let userInput = Number(prompt("Enter a Number"));

while(userInput){
    alert(isEven(userInput)? "Number is even": "Number is odd");
    userInput = Number(prompt("Enter a Number"));
}
console.log(Boolean(0));

//.............do-while..............

do{
    console.log("Hello from do- while")

}while(false)
