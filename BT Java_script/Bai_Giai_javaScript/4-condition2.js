function getSeason() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    let season = '';

    if (month <= 3) {
        season = 'Spring';
    } else if (month <= 6) {
        season = 'Summer';
    } else if (month <= 9) {
        season = 'Autumn';
    } else if (month <= 12) {
        season = 'Winter';
    }

    document.write(`To day is ${year}-${month}-${day}, ${season}`);
}

function convertPoint(x) {
    if (x >= 8.5) {
        return 'Điểm A';
    } else if (x >= 7) {
        return 'Điểm B';
    } else if (x >= 5.5) {
        return 'Điểm C';
    } else if (x >= 4) {
        return 'Điểm D';
    } else {
        return 'Điểm F';
    }
}

function translate(countryCode) {
    let helloMessage = '';

    switch (countryCode) {
        case 'US':
            message = 'Hello';
            break;
        case 'KR':
            message = '여보세요';
            break;
        case 'RU':
            message = 'Привет';
            break;
        case 'IT':
            message = 'Ciao';
            break;
        default:
            message = 'Xin chào';
            break;
    }

    return helloMessage;
}

function findFirstTrueElement1(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) return i;
    }
}

function findFirstTrueElement2(array) {
    return array.indexOf(true);
}
