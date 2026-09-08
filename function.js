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



const evenNumbers = numbers.filter(isEven);
function isEven(num) {
    return num % 2 === 0;
}   
console.log(evenNumbers);




// function expression() 
const isOdd = function(num) {
    return num % 2 !== 0;
};
const oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);



const value1 = numbers.reduce(function(result, num) {
    return result * num;
});
console.log(value1);    


const result1 = numbers.map(function(num) {
    return Math.pow(num, 2);
});
console.log(result1);   


const oddNumbers1 = numbers.filter(function(num) {
    return num % 2 !== 0;
}   );
console.log(oddNumbers1);   

