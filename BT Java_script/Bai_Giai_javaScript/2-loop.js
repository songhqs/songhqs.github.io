function duplicateString(string) {
    let str = string;

    for (let i = 0; i < 9; i++) {
        str += '-' + string;
    }

    return str;
}

function duplicateString2(string) {
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push(string);
    }

    return arr.join('-');
}

function duplicateString3(string) {
    return string + ('-' + string).repeat(9);
}

function calculateFactorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

function reverseString(string) {
    let reversed = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }

    return reversed;
}

function reverseString2(string) {
    return string.split('').reverse().join('');
}

function sortAndDisplayStudentsWithIndex(students) {
    students.sort();

    let html = '';

    for (let i = 0; i < students.length; i++) {
        html += `${i + 1}. ${students[i]} <br/>`;
    }

    document.write(html);
}

function surplusElementsDividedByTwo(numbers) {   
    let arr = [];

    for (let i = 0; i < numbers.length; i++) {
        arr.push(numbers[i] % 2);
    }

    return arr;
}

function surplusElementsDividedByTwo2(numbers) {
    return numbers.map(number => number % 2);
}

function displayNumbersWithColor() {
    let html = '';

    for (let i = 0; i < 50; i++) {
        html += `<span style="color: red">${2 * i + 1}</span> <br/>`;
        html += `<span style="color: blue">${2 * i + 2}</span> <br/>`;
    }

    document.write(html);
}
