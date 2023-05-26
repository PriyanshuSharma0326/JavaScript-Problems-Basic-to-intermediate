// Objects and Oops

// Q1

const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];

// Print the name and total marks of each student.

function printMarks() {
	let marksAndNames = '';
	for(let i = 0, totalMarks = 0; i < studentDetails.length; i++) {
		totalMarks = studentDetails[i].maths + studentDetails[i].science + studentDetails[i].english + studentDetails[i].computer;
		marksAndNames += `Name : ${studentDetails[i].name} | Total Marks : ${totalMarks}\n`
	}
	return marksAndNames;
}

console.log(printMarks());

// Print the name of student whose total marks is highest.

function returnHighest() {
	let highest = 0;
	let index = null;
	for(let i = 0, totalMarks = 0; i < studentDetails.length; i++) {
		totalMarks = studentDetails[i].maths + studentDetails[i].science + studentDetails[i].english + studentDetails[i].computer;
		if(totalMarks > highest) {
			highest = totalMarks;
			index = i;
		}
	}
	return studentDetails[index].name;
}

console.log(returnHighest());

// Print the name of student whose total marks is lowest.

function returnLowest() {
	let lowest = 1000;
	let index = null;
	for(let i = 0, totalMarks = 0; i < studentDetails.length; i++) {
		totalMarks = studentDetails[i].maths + studentDetails[i].science + studentDetails[i].english + studentDetails[i].computer;
		if(totalMarks < lowest) {
			lowest = totalMarks;
			index = i;
		}
	}
	return studentDetails[index].name;
}

console.log(returnLowest());

// Print the average marks of the class in computer subject.

function returnAvg() {
	let total = 0;
	for(let i = 0, totalMarks = 0; i < studentDetails.length; i++) {
		totalMarks = studentDetails[i].maths + studentDetails[i].science + studentDetails[i].english + studentDetails[i].computer;
		total +=totalMarks;
	}
	return Number(total/studentDetails.length);
}

console.log(returnAvg());

// Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.

function returnPercentages() {
	let percentage = [];
	for(let i = 0, totalMarks = 0; i < studentDetails.length; i++) {
		totalMarks = studentDetails[i].maths + studentDetails[i].science + studentDetails[i].english + studentDetails[i].computer;
		percentage.push(totalMarks/4);
	}
	return percentage;
}

function returnGC() {
	let grades = [];
	let scoreboard = '';
	let percentage = returnPercentages();
	for(let i = 0; i < studentDetails.length; i++) {
		if(percentage[i] >=75) {
			grades.push('A');
		}
		else if(percentage[i] >=60) {
			grades.push('B');
		}
		else if(percentage[i] >=35) {
			grades.push('C');
		}
		else {
			grades.push('D');
		}
	}
	for(let i = 0; i < studentDetails.length; i++) {
		scoreboard += `Name : ${studentDetails[i].name} | Grade : ${grades[i]}\n`
	}
	return scoreboard;
}

console.log(returnGC());

// Print the total number of students passed and their names. Pass when total marks is greater than 35%.

function returnPassed() {
	let scoreboard = '';
	let percentage = returnPercentages();
	for(let i = 0; i < studentDetails.length; i++) {
		if(percentage[i] > 35) {
			scoreboard += `Name : ${studentDetails[i].name}\n`
		}
	}
	return scoreboard;
}

console.log(returnPassed());


// Q2

// Create a Class using ES6 in JavaScript named Employee and assign necessary
// data members and methods such as name, id, basic salary, HRA, Allowances; 
// define getSalary method which will return the net salary.

class Employee {
	constructor(name, id, basicSalary, HRA, allowances) {
		this.name = name;
		this.id = id;
		this.basicSalary = basicSalary;
		this.HRA = HRA;
		this.allowances = allowances;
	}
	
	getSalary() {
		return this.basicSalary + this.HRA + this.allowances;
	}
}

// Create two Instances of Employee with all necessary details.

const employee1 = new Employee('Hrithik Devendran', 308, 2000000, 1000000, 50000);
const employee2 = new Employee('Sanaya Majumdar', 439, 1500000, 100000, 10000);

// Call the getSalary method of each instance and return the net salary based on your computation.

console.log(`Employee1 net salary : ${employee1.getSalary()}\nEmployee2 net salary : ${employee2.getSalary()}`);


// Q3

// Bank Account (Object Oriented Programming in JavaScript)

// Create a class and define data members such as name, bank account number,
// account balance, account type, ifsc and name it as BankAccount.

class BankAccount {
	constructor(name, bankAccountNumber, accountBalance, accountType, ifsc) {
		this.name = name;
		this.bankAccountNumber = bankAccountNumber;
		this.accountBalance = accountBalance;
		this.accountType = accountType;
		this.ifsc = ifsc;
	}
}

// Create three Instances(three customers) of BankAccount with all necessary details.

const customer1 = new BankAccount('Vijay Malya', 420420420420, 0, 'Current', 'SBA303261');
const customer2 = new BankAccount('Ajit Doval', 100100100100, 100000000, 'Current', 'PBA884796');
const customer3 = new BankAccount('Rahul Tewatia', 880446777000, 25000, 'Savings', 'IPL994487');

// Print the name of customers and their account balances.

console.log(`Name: ${customer1.name}\tAccount Balance: ${customer1.accountBalance}\nName: ${customer2.name}\tAccount Balance: ${customer2.accountBalance}\nName: ${customer3.name}\tAccount Balance: ${customer3.accountBalance}`);

// Calculate the average account balance from all the instances.

function returnAvgBalance(c1, c2, c3) {
	let total = 0;
	console.log(c1);
	total = c1 + c2 + c3;
	return Number((total/3).toFixed(2));
}

console.log('Average Account Balance :', returnAvgBalance(customer1.accountBalance, customer2.accountBalance, customer3.accountBalance));


// Q4

// Given an array of objects of items in cart, print:

const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];

// the total No. of items

let totalItems = 0;
for(let i = 0; i < cartItems.length; i++) {
	totalItems += cartItems[i].count;
}

console.log('Total items : ', totalItems);

// the total cart value

let totalCartValue = 0;
for(let i = 0; i < cartItems.length; i++) {
	totalCartValue += (cartItems[i].count * cartItems[i].price);
}

console.log('Total cart value : ', totalCartValue);

// the total discounted value(sum of dicounted values on each item) based on the given discount

let totalDiscountedCartValue = 0;
for(let i = 0; i < cartItems.length; i++) {
	totalDiscountedCartValue += (cartItems[i].count * cartItems[i].price)*(1-cartItems[i].discount);
}

console.log('Total discounted cart value : ', totalDiscountedCartValue);

// total tax amount (18% tax, calculated on total cart value)

let totaltaxAmount = 0;
for(let i = 0; i < cartItems.length; i++) {
	totaltaxAmount = totalCartValue*0.18;
}

console.log('Total tax amount : ', totaltaxAmount);
