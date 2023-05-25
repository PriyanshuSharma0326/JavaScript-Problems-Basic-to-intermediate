// Beginner to Intermediate

// 1. String to uppercase

function stringUpperCase(string) {
    return string.toUpperCase();
}

console.log('1/ To uppercase : ', stringUpperCase('hello world'));


// 2. Append strings

function appendStrings(str1, str2) {
    return str2.concat(str1);
}

console.log('2/ Append strings : ', appendStrings('Good', 'Morning'));


// 3. Number of characters in string

function charCountInString(string) {
    return string.split('').length;
}

console.log('3/ Char count in string : ', charCountInString('hello world'));


// 4. String to number

function stringToNumber(string) {
    return Number(string);
}

console.log('4/ String to number : ', stringToNumber('124'));


// 5. Delete vowel

// function deleteVowel(string) {
//     let letters = string.split('');
//     for(let i = 0; i < letters.length; i++) {
//         if(letters[i] === 'a' || letters[i] === 'e' || letters[i] === 'i' || letters[i] === 'o' || letters[i] === 'u') {
//             letters
//         }
//     }
// }

// console.log('5/ Delete vowel : ', deleteVowel('hello world'));


// 6. Check alphanumeric

function checkAlphanumeric(string) {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let word = string.split('');
    let numberString = '';
    for(let i = 0; i < numbers.length; i++) {
        if(word.includes(String(numbers[i]))) {
            numberString += numbers[i];
        }
    }
    return numberString === '' ? 'No alphanumeric character' : `${string} contains digit ${numberString}`;
}

console.log('6/ Check alphanumeric character : ', checkAlphanumeric('batman@45'));


// 7. Print longest and smallest string

function shortAndLongString(str1, str2, str3) {
    let strings = [str1, str2, str3];
    let shortest = strings[0];
    let longest = strings[0];
    for(let i = 1; i < strings.length; i++) {
        if(strings[i].length < shortest.length) {
            shortest = strings[i];
        }
        if(strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    console.log(`7/\nShortest String : ${shortest}\nLongest String : ${longest}`);
}

shortAndLongString('hello world', 'my world', 'its the one and only world');


// 8. Count vowels and consonants

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


// 9. Check string length

function checkStringLength(str) {
    return str.length > 7 ? true : false;
}

console.log('9/ Check if string length greater than 7 : ', checkStringLength('hello world'));


// 10. Copy smaller string into bigger string

// function copyString(str1, str2) {}

// console.log();


// 11. Palindrome

function ifPalindrome(string) {
    let word = string.split('');
    let reversedWord = string.split('').reverse();
    let flag = false;
    for(let i = 0; i < word.length; i++) {
        if(word[i] === reversedWord[i]) {
            flag =true;
        }
        else {
            flag = false;
            break;
        }
    }
    return flag;
}

console.log('11/ Check if palindrome : ', ifPalindrome('malayalam'));


// 12. Print all possible substrings

function printSubstring(string) {
    let substrings = '';
    for(let i = 0; i < string.length; i++) {
        for(let j = i+1; j <= string.length; j++) {
            substrings += string.slice(i, j);
            substrings += '\n';
        }
    }
    return substrings;
}

console.log('12/ Print all possible substrings :\n', printSubstring('abcd'));


// 13. Remove time from date string

function removeTimeFromDateString(dateString) {
    let [day, month, monthDay, time] = dateString.split(' ');

    return `${day} ${month} ${monthDay}`;
}

console.log('13/ Remove time from date string : ', removeTimeFromDateString('Wed April 15, 7pm'));


// 14. Mask all but not last 4

function maskString(string) {
    let letters = string.split('');
    for(let i = 0; i < letters.length-4; i++) {
        letters[i] = '#';
    }
    return letters.join('');
}

console.log('14/ Remove time from date string : ', maskString('5565534276455423'));


// 15. First 6 to capital

function firstSixToCapitalCase(string) {
    let result = string.slice(0, 6).toUpperCase() + string.slice(6);
    return result;
}

console.log('15/ First 6 to capital : ', firstSixToCapitalCase('tic tac toe is a fun game'));


// Advance

// 1. Replace

function replaceCharacters(S, c1, c2) {
    let string = S.split('');
    for(let i = 0; i < string.length; i++) {
        if(string[i] === c1) {
            string[i] = c2;
        }
    }
    return string.join('');
}

console.log('1/ Replace characters : ', replaceCharacters('Mahindra', 'a', 'c'));


// 2. Remove spaces

function removeSpaces(string) {
    let letters = string.split('');
    for(let i = 0; i < letters.length; i++) {
        if(letters[i] === ' ') {
            letters[i] = '';
        }
    }

    return letters.join('');
}

console.log('2/ Remove spaces : ', removeSpaces('we are  mystic    force'));


// 3. Character count

// function charCount(string) {
    
// }

// console.log('3/ Character count : ', charCount('malayalam'));


// 4. Odd Uppercase

// function oddUppercase(string) {}

// console.log('4/ Odd Uppercase : ', oddUppercase('malayalam'));


// 5. Remove Word

function removeWord(string, word) {
    let sentence = string.split(' ');
    for(let i = 0; i < sentence.length; i++) {
        if(sentence[i] === word) {
            sentence[i] = '';
        }
    }
    return sentence.join(' ');
}

console.log('5/ Remove Word : ', removeWord('how was your day?', 'how'));
