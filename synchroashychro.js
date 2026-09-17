// // handlewith : callback ,Promises, async/await

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function message() {
//     console.log("Welcome to JavaScript");
// }

// console.log("Start");

// greet("Siva", message);

// console.log("End");




// function calculate(a, b, callback) {
//     let result = a + b;
//     callback(result);
// }

// calculate(10, 20, function(result) {
//     console.log(result);
// });

// console.log("Finished");


// function greet(callback) {
//     setTimeout(function () {
//         console.log("Hello Siva");
//         callback();
//     }, 2000);
// }

// function message() {
//     console.log("Welcome to JavaScript");
// }

// console.log("Start");

// greet(message);

// console.log("End");



function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 is completed");
        callback();
        },3000);
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 is completed");
       callback();
        },2000);
}

function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 is completed");
        callback();
    },3000);
}

function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 is completed");
        callback();
        },1000);
}
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{

            });
        });
    });
});



// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task 1 is completed");
//         callback();
//     }, 3000);
// }

// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task 2 is completed");
//         callback();
//     }, 2000);
// }

// function task3(callback) {
//     setTimeout(() => {
//         console.log("Task 3 is completed");
//         callback();
//     }, 3000);
// }

// function task4(callback) {
//     setTimeout(() => {
//         console.log("Task 4 is completed");
//         callback();
//     }, 1000);
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log("All tasks completed");
//             });
//         });
//     });
// });



