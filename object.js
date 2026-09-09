// constructor


// // Parent class
// class Animal {

//     // Constructor
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(this.name + " is eating");
//     }
// }

// // Child class  
// class Dog extends Animal {

//     // Child constructor
//     constructor(name, breed) {
//         super(name);       // Call parent constructor
//         this.breed = breed;
//     }

//     bark() {
//         console.log(this.name + " is barking");
//     }
// }

// // Create object
// let dog1 = new Dog("Tommy", "German Shepherd");

// console.log(dog1.name);
// console.log(dog1.breed);

// dog1.eat();   // Inherited method
// dog1.bark();  // Child method




// class rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }

//     area() {
//         return this.length * this.width;
//     }   

//     perimeter() {
//         return 2 * (this.length + this.width);
//     }

//     set length(length) {
//         if (length >0) {
//            this._length = length;
//         } else {
//             console.log("Length must be positive");    
//         }

//     }

//     set width(width) {
//         if (width >0) {
//             this._width = width;
//         } else {
//             console.log("Width must be positive");
//         }

//     }

//     get length() {
//         return this._length;
//     }

//     get width() {
//         return this._width;
//     }
// }   

// const rect1 = new rectangle(10, 78);
// console.log("Area of rectangle: " + rect1.area());
// console.log("Perimeter of rectangle: " + rect1.perimeter());




// class person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     } 
//     set name(name) {
//         if (typeof name === "string" && name.length > 0) {
//             this._name = name;
//         } else {
//             console.log("Name cannot be empty");
//         }

//     }
//     set age(age) {
//         if (typeof age === "number" && age > 0) {
//             this._age = age;
//         } else {
//             console.log("Age must be a positive number");
//         }
//     }

//     get name() {
//         return this._name;
//     }

//     get age() {
//         return this._age;
//     }

// }

// const person1 = new person("John", 30);
// console.log(person1.name);
// console.log(person1.age);



