function findBiggerNumber(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return false;

    if (a > b)
        return a;
    else
        return b;
}

function calculateFactorial(number) {
    if (!Number.isInteger(number) || number < 0) return false;

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

function getEvenNumbersAndSorting1(numbers) {
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    evenNumbers.sort(function(a, b){ return b - a });

    return numbers;
}

function getEvenNumbersAndSorting2(numbers) {
    let evenNumbers = numbers.filter(a => a % 2 === 0);

    evenNumbers.sort((a, b) => b - a);

    return evenNumbers;
}

function checkUser(user) {
    if (user.username.length > 0 && user.username.length <= 20 &&
        user.password.length >= 6 && user.password.length <= 32 &&
        user.confirm === user.password) {
        alert('Pass');
    } else {
        alert('Fail');
    }
}