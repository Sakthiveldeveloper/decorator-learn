"use strict";
// interface Soo {
//     something: string;
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// console.log("this is working Sakthi TS")
// class Person {
//     public name: string = "John";
//     sayHi() {
//         console.log(`${this.name} says hi!`);
//     }
// }
//1
//Class Decorator
// class Person {
//     public name: string = "John";
//     @Logger
//     sayHi() {
//         console.log(`${this.name} says hi!`);
//     }
// }
// function Logger(targets: any, key:string)  {
//     console.log("This is a decorator");
// }
//output :  This is a decorator
//2
// class Person {
//     public name:string = "John";
//     @Logger
//     sayHi () {
//         console.log(`${this.name} says hi`)
//     }
// } 
// function Logger(target: any, key:string)  {
//     console.log("target :", target);
//     console.log("key :", key);
// }
//output
// {}
// sayHi
// target : {}
// key : sayHi
//3
// class Person {
//     public name:string = "John";
//     @Logger
//     sayHi () {
//         console.log(`${this.name} says hi`)
//     }
// } 
// function Logger(target: any, key:string)  {
//     console.log("target :", Object.getOwnPropertyNames(target));
//     console.log("key :", key);
// }
// output
// target : [ 'constructor', 'sayHi' ]  //because class have default empty constructor
// key : sayHi
// 4
class Person {
    constructor() {
        this.name = "John";
    }
    sayHi() {
        console.log(`${this.name} says hi`);
    }
}
__decorate([
    Logger(21),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Person.prototype, "sayHi", null);
function Logger(age) {
    return function (target, key) {
        console.log(age);
        console.log("target :", Object.getOwnPropertyNames(target));
        console.log("key :", key);
    };
}
//output
// 21
// target : [ 'constructor', 'sayHi' ]
// key : sayHi
