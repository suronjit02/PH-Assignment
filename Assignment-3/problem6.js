
/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var salary = startingSalary;

for (var i = 0; i < experience; i++) {

    salary = salary + (salary * .05);


}

console.log(salary.toFixed(2));