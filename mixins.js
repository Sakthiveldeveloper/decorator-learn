// const mydetails = {

// };
// const firstname = {
//     firstname: "sakthi"
// };
// const surname = {
//     surname: "vel"
// };
// const occupation = {
//     occupation: "Software Developer"
// };
// const nationality = { 
//     nationality: "Nigerian" 
// };
// console.log(mydetails)
// Object.assign(mydetails, surname, firstname, occupation, nationality);
// // Object.assign(target, ...sources);
// console.log(mydetails)

//classtype

// const authorizationMixin = Base => class extends Base {
//     generateToken(){
//         return 'token'
//     }
//     verifyToken(){
//         return 'verify-token'
//     }
// }

// class Person {
//     constructor(name){
//         this.name = name
//     }
// }

// class Man extends authorizationMixin(Person){}

// console.log(new Man('test').generateToken())
// console.log(new Man('test').verifyToken())


///prototype
const authorizeMixin = {
    generateToken() {
        return 'any-token'
    },
    verifyToken() {
        return 'verify-token'
    }
};

class Person {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Person.prototype, authorizeMixin);

console.log(new Person("Dude").generateToken())
console.log(new Person("Dude").verifyToken())

// referece
// https://blog.bitsrc.io/mixin-in-javascript-7a7eaa6d4920