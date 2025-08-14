
/** Problem -01 ( Divide the Asset ) */
var area = 15;
//write your code here

var halfPart = area / 2;

console.log(halfPart);



/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here

if (money > 0 && money < 10000) {
    console.log('Chocolate');
}
else if (money >= 10000 && money < 25000) {
    console.log('Cycle');
}
else {
    console.log('Laptop');
}



/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (var i = 1; i <= lastDay; i++) {

    if (i % 3 == 0) {
        console.log(i, '- medicine');

    } else
        console.log(i, '- rest');
}


/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

if (fileName.endsWith('.pdf') || fileName.endsWith('.docx') || fileName.startsWith('#')) {
    console.log('Store');
}
else {
    console.log('Delete');
}


/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here

var email = student.name + student.roll + '.' + student.department + '@ph.ac.bd';

console.log(email);



/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var salary = startingSalary;

for (var i = 0; i < experience; i++) {

    salary = salary + (salary * .05);


}

console.log(salary.toFixed(2));