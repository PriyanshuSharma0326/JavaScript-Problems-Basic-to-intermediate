// Arrays

// Beginner - Intermediate

// 1. Sum of array

function sumOfArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log('1/ Array sum : ', sumOfArray([10,4,5,2,5,6,9]));


// 2. Avg of Array

function avgOfArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Number((sum/arr.length).toFixed(2));
}

console.log('2/ Avg of Array : ', avgOfArray([10,4,5,2,5,6,9]));


// 3. Max and Min of Array

function maxAndMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(`3/ Max and Min of Array :\nMinimum element : ${min}\nMaximum element : ${max}`);
}

maxAndMin([10,4,5,2,5,6,9]);


// 4. Median & Mode of Array

function medianAndMode(arr) {
    let median = null;
    let sortedArray = arr.sort((a, b) => a-b);
    let midIndex = Math.floor(sortedArray.length/2);
    if(sortedArray.length%2 === 0) {
        median = (sortedArray[midIndex-1] + sortedArray[midIndex])/2;
    }
    else {
        median = sortedArray[midIndex];
    }

    let mode = null;
    let terms = [];

    console.log(`4/ Median & Mode of Array :\nMedian element : ${median}\nMode element : ${undefined}`);
}

medianAndMode([10,4,5,2,5,6,9]);


// 5. Sum of two arrays

function sumOfArrays(arr1, arr2) {
    let sumArr1 = sumOfArray(arr1);
    let sumArr2 = sumOfArray(arr2);
    return sumArr1+sumArr2;
}

console.log('5/ Sum of two arrays : ', sumOfArrays([3,5,2,9,4], [6,2,8,1,3]));


// 6. Count vowels and consonants

function countVowelsAndConsonants(string) {
    let vowels = 0;
    let consonants = 0;
    let letters = string.split('');
    for(let i = 0; i < letters.length; i++) {
        if(letters[i] === 'a' || 
        letters[i] === 'e' || 
        letters[i] === 'i' || 
        letters[i] === 'o' || 
        letters[i] === 'u' || 
        letters[i] === 'A' || 
        letters[i] === 'E' || 
        letters[i] === 'I' || 
        letters[i] === 'O' || 
        letters[i] === 'U') {
            vowels++;
        }
        else if (letters[i] === ' ') {}
        else {
            consonants++;
        }
    }
    console.log(`8/\nVowels : ${vowels}\nConsonants : ${consonants}`);
}

countVowelsAndConsonants('hello world');


// 7. Shift array by X

function shiftArrayByX(arr, X) {
    let firstXElements = arr.splice(-X);
    let newArray = firstXElements.concat(arr);
    return newArray;
}

console.log('7/ Shift array by X : ', shiftArrayByX([1,2,3,4,5], 2));


// Advanced

// 1. Sum of two matrix

function sumOfMatrix(matrix1, matrix2) {
    if(matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        return 'Matrices should have the same dimensions';
    }
    let newMatrix = [];
    for(let i = 0; i < matrix1.length; i++) {
        let arrayElement = [];
        for(let j = 0; j < matrix1[i].length; j++) {
            arrayElement.push(matrix1[i][j] + matrix2[i][j]);
        }
        newMatrix.push(arrayElement);
    }
    return newMatrix;
}

console.log('1/ Sum of two matrix : ', sumOfMatrix([[1,2,3], [4,5,6], [7,8,9]], [[9,8,7], [6,5,4], [3,2,1]]));


// 2. Transpose of Matrix

function transpose(matrix) {
    // let arr = [];
    // for(let i = 0; i < matrix.length; i++) {
    //     for(let j = 0; j < matrix[i].length; j++) {
    //         arr.push(matrix[i][j]);
    //     }
    // }
    // console.log(arr);
    // let transpose = [];
    // for(let i = 0; i < arr.length; i++) {
    //     transpose.push(arr[i]);
    // }
}

console.log('2/ Transpose of matrix : ', transpose([[1,2,3], [4,5,6], [7,8,9]]));
