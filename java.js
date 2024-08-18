const button = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");

let fnum = 0;
let snum = 0;
let currentInput = '';
let sign = '';


const add = function (one, two) {
    return one + two;
}

const minus = function (one, two) {
    return one - two;
}

const times = function (one, two) {
    return one * two;
}

const divide = function (one, two) {
    if (two === 0) {
        return display.textContent = "Nice try."
    }
    return one / two;
}


const plus = document.querySelector('.btn-10');
plus.addEventListener('click', () => {
    sign = '+';
    fnum = parseInt(currentInput);
    currentInput = '';
    display.textContent = sign;
});

const sub = document.querySelector('.btn-11');
sub.addEventListener('click', () => {
    sign = '-'
    fnum = parseInt(currentInput);
    currentInput = '';
    display.textContent = sign;
});

const multi = document.querySelector('.btn-12');
multi.addEventListener('click', () => {
    sign = 'x'
    fnum = parseInt(currentInput);
    currentInput = '';
    display.textContent = sign;
});

const div = document.querySelector('.btn-13');
div.addEventListener('click', () => {
    sign = '÷'
    fnum = parseInt(currentInput);
    currentInput = '';
    display.textContent = sign;
});

button.forEach((button, index) => {
    if (index === 9) {
        button.setAttribute('number', '0'); // Last button is '0'
    } else {
        button.setAttribute('number', index + 1); // Numbers 1-9
    }

    button.addEventListener('click', () => {
        let pop = button.getAttribute('number');

        if (currentInput !== '0') {
            currentInput += pop;
            display.textContent = currentInput;
        } else {
            currentInput = '';
            pop = 0;
            display.textContent = '0';
        }
    });

});

const equal = document.querySelector('.btn-14');
equal.addEventListener('click', () => {
    snum = parseInt(currentInput);
    let equals = '';
    if (sign === '+') {
        equals = add(fnum, snum);
    } else if (sign === '-') {
        equals = minus(fnum, snum);
    } else if (sign === 'x') {
        equals = times(fnum, snum);
    } else if (sign === '÷') {
        equals = divide(fnum, snum);
    }
    currentInput = '';
    sign = '';
    display.textContent = equals;
});

const clear = document.querySelector('.btn-15');
clear.addEventListener('click', () => {
    snum = 0;
    fnum = 0;
    sign = '';
    currentInput = '';
    display.textContent = '';
});

