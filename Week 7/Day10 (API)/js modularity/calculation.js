 
 
 //the function calculation net salary 

 export default function SalaryCalculation(salary){
    let amount =salary * 0.3;
    let NetSalary = salary -amount;

    console.log(` Your salary is = ${NetSalary} OMR `);

}



 //the function calculation age
export  function AgeCalculation(yearOfBirth){

    let age = 2024 - yearOfBirth;
    console.log(` Your age is ${ age} `);

}