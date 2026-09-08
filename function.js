// foreach()
// Map()
// reduce()
// filter()


// function declaration
// foreach()

const numbers = [2, 3, 4];



function displayNumbers(numbers) {
    numbers.forEach(function(num) {
        console.log(num);
    });
}

displayNumbers([10, 20, 30, 40]);



// map()

const results= numbers.map(double);

function double(num) {
    return Math.pow(num, 2);
}
console.log(results);



// reduce()
const value=numbers.reduce(multiply);

function multiply(result, num) {
    return result * num;
}
console.log(value);



// filter()
