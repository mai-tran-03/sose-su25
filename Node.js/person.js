// const person = {
//     name: 'Surname Given-Name',
//     age: 100,
// }

// Module wrapper function
// (function (exports, require, module, __filename, __dirnamme)) {})
// console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}.`)
    }
}

module.exports = Person;