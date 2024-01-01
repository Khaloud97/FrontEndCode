import User from "./user.js";
import SalaryCalculation, {AgeCalculation} from "./calculation.js";

let user = new User("khaloud",1997,2500)
console.log(user)
console.log("Hello "+ user.name)

SalaryCalculation(user.salary);
AgeCalculation(user.yearOfBirth);