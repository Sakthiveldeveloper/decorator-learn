// interface Soo {
//     something: string;
// }

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
    public name:string = "John";

    @Logger(21)
    sayHi () {
        console.log(`${this.name} says hi`)
    }
} 
function Logger(age: number)   {
    return function(target: any, key:string) {
        console.log(age);
        console.log("target :", Object.getOwnPropertyNames(target));
        console.log("key :", key);
    }
}

//output
// 21
// target : [ 'constructor', 'sayHi' ]
// key : sayHi
