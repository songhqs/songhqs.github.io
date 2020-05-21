function squareNumber(a) {
    return a * a;
}

function calculateCentury(year) {
    return Math.ceil(year / 100);
}

function truncateString(string) {
    return string.slice(0, 10) + '...';
}

function formatStringToCapitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function getMinNumbers1(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[0];
}

function getMinNumbers2(numbers) {
    return Math.min.apply(null, numbers);
}

function sortAndDisplayStudent(students) {
    students.sort();
    students = students.join('<br />');
    document.write(students);
}
