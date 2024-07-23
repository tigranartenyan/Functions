"use strict";

function calc (n1, n2, operation) {
    switch (operation) {
        case "*":
            return n1 * n2;
        case "/":
            return n2 === 0 ? "You can't divide by zero" : n1 / n2;
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
    }
}

console.log(calc(4, 5, "+"));
console.log(calc(4, 5, "-"));
console.log(calc(4, 5, "*"));
console.log(calc(4, 5, "/"));
console.log(calc(4, 0, "/"));