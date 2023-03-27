// main way


/* let sum = 0;
for (let i = 5; i >= 1; i--) {
    sum = i + sum;
}
console.log(sum); */


// recursion way

function sum(i) {
    if (i === 1) {
        return 1;
    }
    return i + sum(i - 1);
}

const result = sum(5);
console.log(result);




// increment recursion 

function sum(i) {
    if (i === 10) {
        return 10;
    }
    return i + sum(i + 1);
}

const result1 = sum(1);
console.log(result1);