
console.log("====================object dictation===========================")

let User ={
    name: "khaloud",
    age: 26,
    gender:"female"
}

//object dictation
let {name,age,gender}= User;
let {name: UserName , age:UserAge , gender:UserGender}= User;
let {name:NickName}= User;


console.log(User)
console.log(name,age,gender)
console.log(UserName,UserAge,UserGender)
console.log(NickName)



console.log("====================Arrye dictation===========================")

let Student =[
    "Sara",
    28,
    "female"
]

let [Sname,Sage,Sgender]=Student;

console.log(Student)
console.log(Sname)
console.log(Sname,Sage,Sgender)


let index = Student.indexOf();
console.log(index)

