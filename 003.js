// Numbers

// 1. Sum

// const input1 = Number(prompt('Enter a number'));
const input1 = 20;
// const input2 = Number(prompt('Enter a number'));
const input2 = 40;

console.log(`1/\nInput Number 1 : ${input1}\nInput Number 2 : ${input2}\nSum : ${input1 + input2}`);


// 2. Simple Interest

let P = 100;
let R = 6;
let T = 2;
const SI = (P * T * R)/100;

console.log('2/ Simple Interest = ', SI);


// 3. Kinetic Energy

// const m = Number(prompt('Enter mass'));
const m = 60;
// const v = Number(prompt('Enter velocity'));
const v = 12;

const KE = 0.5*m*Math.pow(v, 2);

console.log('3/ Kinetic Energy = ', KE);


// 4. Farhenheit to Celsius

// let Temp = Number(prompt('Enter temperature(in Farhenheit)'));
let Temp = 56;

console.log('4/ Temperature(in Celsius) : ', ((Temp - 32)*(5/9)).toFixed(5));


// 5. Area, Perimeter of square & Surface Area, Volume of Cube

// let squareSide = Number(prompt('Enter side of square'));
let squareSide = 10;
// let cubeSide = Number(prompt('Enter side of cube'));
let cubeSide = 8;

console.log(`5/\nArea of square : ${squareSide*squareSide}\nPerimeter of Square : ${4*squareSide}\nSurface area of cube : ${6*cubeSide*cubeSide}\nVolume of cube : ${cubeSide*cubeSide*cubeSide}`);


// 6. Calculate Profit/Loss

// let CP = Number(prompt('Enter cost price'));
let CP = 3125;
// let SP = Number(prompt('Enter selling price'));
let SP = 1125;

console.log(`6/\n${CP < SP ? `${SP-CP} Profit` : `${CP-SP} Loss`}`);


// 7. Sum of N natural numbers

// let N = Number(prompt('Enter a natural number'));
let N = 100;
let sumOfNatural = 0;

for(let i = 1; i <= N; i++) {
    sumOfNatural += i;
}

console.log(`7/ Sum of N(${N}) natural numbers : ${sumOfNatural}`);


// 8. Print N odd numbers in descending order

// let numberOfOddNumbers = Number(prompt('Enter a number'));
let numberOfOddNumbers = 4;
let oddNumbers = '';

for(let i = numberOfOddNumbers; i >=1; i--) {
    oddNumbers += (i*2 - 1);
    oddNumbers += ' ';
}

console.log('8/ Odd numbers in descending order :', oddNumbers);


// 9. Sum of all digits in a string

function sumOfDigitsInString(string) {
    let digits = string.split('');
    let sum = 0;
    for(let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }
    return sum;
}

console.log('9/ Sum of all digits that occur in a given string :', sumOfDigitsInString('1234'));


// 10. Reverse a number

function reverseNumber(num) {
    let numberString = String(num).split('').reverse().join('');
    return Number(numberString);
}

console.log('10/ Reversed number :', reverseNumber(32243));


// 11. Cyclically rotate left

function rotateLeft(num, X) {
    let numberString = String(num).split('');
    for(let i = 0; i < X; i ++) {
        let temp = 0;
        temp = numberString[0];
        numberString.shift();
        numberString.push(temp);
    }
    return Number(numberString.join(''));
}

console.log('11/ Cyclically rotated number :', rotateLeft(1234, 2));


// 12. Decimal to Binary & Octal to Decimal

function decimalToBinary(dec) {
    return Number(dec.toString(2));
}

function octalToDecimal(oct) {
    return parseInt(oct, 8);
}

console.log('12.1/ Decimal to Binary :', decimalToBinary(5), '\n12.2/ Octal to Decimal :', octalToDecimal(116));
