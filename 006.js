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

