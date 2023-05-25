// EASY

// 1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const element = document.getElementById('Answers');
element.style.color = 'white';
let num1=5, num2=13, num3=7, num4=21, num5=48;
console.log("1/ Sum of numbers: " + (num1+num2+num3+num4+num5));


// 2. Write a program to take a number input from user and determine whether the number is odd or even.

// const a_number = prompt("Enter a number");
const a_number = 43;
if(a_number %2 == 0) {
    console.log("2/ Even");
} else {
    console.log("2/ Odd");
}


// 3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

let a = 129, b = 251;
console.log(a>b ? '3/ a is max' : '3/ b is max');


// 4. Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

let x = 8, y = 23, z = 17;
// if (x>y) {
//     if (x>z) {
//         console.log('4/ x is max');
//     }
//     else {
//         console.log('4/ z is max');
//     }
// }
// else {
//     if (y>z) {
//         console.log('4/ y is max');
//     }
//     else {
//         console.log('4/ z is max');
//     }
// }

console.log(x>y ? (x>z ? '4/ x is max' : '4/ z is max'): (y>z ? '4/ y is max' : '4/ z is max'));


// 5. Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

let n1 = 35, n2 = 29, n3 = 46;
console.log(n1<n2 ? (n1<n3 ? '5/ n1 is min' : '5/ n3 is min'): (n2<n3 ? '5/ n2 is min' : '4/ n3 is min'));


// 6. Write program to take a month as an input from the user and find out whether the month has 31 days or not.

// const month = prompt("Enter a month");
const month = 'February';
switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log('6/ Month has 31 days');
        break;
    default:
        console.log('6/ Month has less than 31 days');
}


// Intermediate

// 1. Fizzbuzz

let fizzbuzzArr = [];
function fizzbuzz () {
    for (let i = 0; i<100; i++) {
        if((i+1)%3 === 0 && (i+1)%5 === 0) {
            fizzbuzzArr.push('FizzBuzz');
        }
        else if((i+1)%3 === 0) {
            fizzbuzzArr.push('Fizz');
        }
        else if((i+1)%5 === 0) {
            fizzbuzzArr.push('Buzz');
        }
        else {
            fizzbuzzArr.push(i+1);
        }
    }
}
fizzbuzz();
console.log('1/', fizzbuzzArr);


// 2. Star Pattern

let starPattern = '';
for(let i = 1; i <= 5; i++) {
    for(let j = 0; j < i; j++) {
        starPattern += '*';
    }
    starPattern += '\n';
}
console.log(starPattern);


// 3. Multiplication Table

// const num = prompt("Enter a number");
let num = 13;
let multiplication_table = '';
for(let i = 1; i <= 12; i++) {
    multiplication_table += (num*i) + '\n';
}
console.log(multiplication_table);


// 4. Fibonacci Series

let fibonacciSeries = '';
function fibonacci(k) {
    let val1 = 0;
    let val2 = 1;
    let sum_last_two;
    for(let i = 0; i < k; i++) {
        fibonacciSeries += val1;
        sum_last_two = val1 + val2;
        val1 = val2;
        val2 = sum_last_two;
        if(i === k-1) {
            fibonacciSeries += '';
        }
        else {
            fibonacciSeries += ', ';
        }
    }
}
fibonacci(7);
console.log(fibonacciSeries);


// 5. Factorial

function factorial(num) {
    if(num === 0 || num === 1) {
        return 1;
    }
    else {
        return factorial(num-1) * num;
    }
}
console.log(factorial(5));


// 6. Check if Prime

function checkIfPrime(num) {
    if(num <= 1) {
        return false;
    }
    else if (num === 2) {
        return true;
    }
    else if (num%2 === 0){
        return false;
    }
    for(let i = 3; i <= Math.sqrt(num); i+=2) {
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}
// const primeNumber = prompt('Enter a number');
const primeNumber = 23;
console.log(checkIfPrime(primeNumber));


// 7. Determine Weekend or Weekday

function determineDay() {
    switch(day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            return 'Weekday';
        case 'Saturday':
        case 'Sunday':
            return 'Weekend';
    }
}
// const day = prompt('Enter a day');
const day = 'Tuesday';
console.log(determineDay(day));
