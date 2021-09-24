"use strict";

const getString = (str) => {
    if (typeof str !== 'string') {
        alert('Введи строку!');
        return;
    }

    str = str.trim();

    if (str.length > 30) {
        return str.slice(0, 30) + '...';
    }

    return str;
}

const string = prompt('Введи какую-нибудь строчку');

console.log(getString(string));