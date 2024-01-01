class User{
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    //the function 
    getInfo(){
        console.log(`Hello ${this.name} ,age is ${this.age} , from ${this.address}`);

    }
}

let user =new User("Khaloud" ,26 ,"Oman")
//console.log(user.getInfo());
user.getInfo();