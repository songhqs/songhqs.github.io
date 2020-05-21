function printTriangle(height = 3) {
    let html = '';

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height; j++) {
            if (i >= j)
                html += '* ';
            else
                html += '  ';
        }

        html += '<br/>';
    }

    document.write('<pre>' + html + '</pre>');
}

function printEmptyRectangle(width = 4, height = 4) {
    let html = '';

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i === 0 || i === height - 1 || j === 0 || j === width - 1)
                html += '* ';
            else
                html += '  ';
        }

        html += '<br/>';
    }

    document.write('<pre>' + html + '</pre>');
}

function printSpecialTriangle(height = 2) {
    let html = '';

    const width = height * 2 - 1;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i <= j && j <= width - 1 - i)
                html += '* ';
            else
                html += '  ';
        }

        html += '<br/>';
    }

    document.write('<pre>' + html + '</pre>');
}

function printX(height = 5) {
    let html = '';

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height; j++) {
            if (i === j || i === height - 1 - j)
                html += '* ';
            else
                html += '  ';
        }

        html += '<br/>';
    }

    document.write('<pre>' + html + '</pre>');
}

function printButterfly(height = 5) {
    let html = '';

    const halfHeight = (height - 1) / 2;

    let numberOfStar = 1;
    let numberOfSpace = height - 2;

    for (let i = 0; i < halfHeight; i++) {
        html += '* '.repeat(numberOfStar) +
            '  '.repeat(numberOfSpace) +
            '* '.repeat(numberOfStar) +
            '<br/>';

        numberOfStar++;
        numberOfSpace -= 2;
    }

    html += '* '.repeat(height) + '<br/>';

    numberOfStar = halfHeight;
    numberOfSpace = 1;

    for (let i = 0; i < height / 2; i++) {
        html += '* '.repeat(numberOfStar) +
            '  '.repeat(numberOfSpace) +
            '* '.repeat(numberOfStar) +
            '<br/>';
        numberOfStar--;
        numberOfSpace += 2;
    }

    document.write('<pre>' + html + '</pre>');
}