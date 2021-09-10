const num = 266219;
const numDigitArray = num.toString().split('');

const result = numDigitArray.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
});
const result2= result ** 3;

console.log(`Результат перемножения цифр числа ${num}:`, result);
console.log('Полученный результат возведенный в 3 степень:', result2);
console.log('Первые две цифры возведенного в 3 степень числа:', +result2.toString().substr(0, 2));
