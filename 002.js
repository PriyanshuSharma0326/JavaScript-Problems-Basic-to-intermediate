// EASY

// 1. a^b

function power(a, b) {
    let result = 1;
    for(let i = 0; i < b; i++) {
        result = result*a;
    }
    return result;
}

console.log('1/ a^b = ', power(2, 3));


// 2. Area of Hexagon

function areaOfHexagon(side_length) {
    return ((3*(Math.sqrt(3))*Math.pow(side_length, 2))/2).toFixed(2);
}

console.log('2/ Area of hexagon = ', areaOfHexagon(10));


// 3. Number of words

function noOfWords(sentence) {
    return sentence.split(' ').length;
}

console.log('3/ Number of words in string = ', noOfWords('We are alchemyst'));


// 4. Find minimum

function findMin(...arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

console.log('4/ Minimum number in array = ', findMin(3, 5, 9, 1));


// 5. Find maximum

function findMax(...arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log('5/ Maximum number in array = ', findMax(3, 5, 9, 1));


// 6. Type of Triangle

function typeOfTriangle(angle1, angle2, angle3) {
    if((angle1 === angle2 && angle2 === angle3) && (angle1+angle2+angle3 === 180)) {
        return 'Equilateral Triangle';
    } else if ((angle1 === angle2 || angle2 === angle3 || angle3 === angle1) && (angle1+angle2+angle3 === 180)) {
        return 'Isosceles Triangle';
    } else if ((angle1 !== angle2 && angle2 !== angle3 && angle3 !== angle1) && (angle1+angle2+angle3 === 180)) {
        return 'Scalene Triangle';
    } else {
        return 'Not a Triangle';
    }
}

console.log('6/ Type of traingle = ', typeOfTriangle(30, 60, 90));


// Medium

// 1. Length of array

function arrayLength(arr) {
    return arr.length;
}

console.log('1/ Length of array = ', arrayLength([1,5,3,7,8]));


// 2. Index of item

function indexOf(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            return i;
        }
    }
    return 'Element not found in array!';
}

console.log('2/ Index of item = ', indexOf([1,6,3,5,8,9], 3));


// 3. Replace

function replace(arr, victim, culprit) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === victim) {
            arr[i] = culprit;
        }
    }
    return arr;
}

console.log('3/ Replace = ', replace([1,5,3,5,6,8], 5, 10));


// 4. Merge Arrays

function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log('4/ Merge Arrays = ', mergeArray([1,3,5], [2,4,6]));


// 5. Character position

function charAt(string, index) {
    return string[index];
}

console.log('5/ Character at = ', charAt("skillsafari", 0));


// 6. Minimum date

// function minDate(date1, date2) {
//     const [d1, m1, y1] = date1.split('/').reverse();
//     const [d2, m2, y2] = date2.split('/').reverse();
//     const d1Formatted = `${y1}-${m1}-${d1}`;
//     const d2Formatted = `${y2}-${m2}-${d2}`;
//     const date1Obj = new Date(d1Formatted);
//     console.log(date1Obj);
//     const date2Obj = new Date(d2Formatted);
//     console.log(date2Obj);

//     return (date1Obj < date2Obj);
// }

// console.log('6/ Minimum date = ', minDate('02/05/2021', '24/01/2021'));


// Advanced

// 1. Generate secret codes

// function encodeString(string, N) {
// }

// console.log(encodeString('skill', 2));


// 2. Capitalise

function toSentenceCase(string) {
    let words = string.split(' ');
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log('1/ Capitalised string = ', toSentenceCase('we are alchemyst'));


// 3. Return array in ascending order

function sortArray(array) {
    // let 
    // for(let i = 0; i < array.length; i++) {
        
    // }

    return array.sort(function (a, b) {return a - b});
}

console.log('2/ Sorted array = ', sortArray([100,83,32,9,45,61]));


// 4. Reverse word

function reverseCharactersOfWord(string) {
    let words = string.split(' ');
    let reversedString = [];

    for(let i = 0; i < words.length; i++) {
        let reversed = words[i].split('').reverse().join('');
        reversedString.push(reversed);
    }
    return reversedString.join(' ');
}

console.log('3/ Sentence with reverse words = ', reverseCharactersOfWord('we are alchemyst'));
