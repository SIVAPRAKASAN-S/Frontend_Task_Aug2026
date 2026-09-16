// handlewith : callback ,Promises, async/await

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function message() {
    console.log("Welcome to JavaScript");
}

console.log("Start");

greet("Siva", message);

console.log("End");




function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

calculate(10, 20, function(result) {
    console.log(result);
});

console.log("Finished");


function greet(callback) {
    setTimeout(function () {
        console.log("Hello Siva");
        callback();
    }, 2000);
}

function message() {
    console.log("Welcome to JavaScript");
}

console.log("Start");

greet(message);

console.log("End");




