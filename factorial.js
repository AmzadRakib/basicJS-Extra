// looping way for factorial

/* let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}

console.log(factorial); */


// recursion way for factorial 

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const result = factorial(5);
console.log(result);



function compare(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
const result1 = compare(15, "15");
console.log(result1);