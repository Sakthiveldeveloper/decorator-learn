"use strict";
//1
//class decoratoe example
// type ClassDecorator = <TFunction extends Function>
// (target: TFunction) => TFunction | void;
// 1.target: The constructor of the class.
// 2.return:If the class decorator returns a value, it will replace the class declaration.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// type Consturctor = { new (...args: any[]): any };
// function toString<T extends Consturctor>(BaseClass: T) {
//   return class extends BaseClass {
//     toString() {
//       return JSON.stringify(this);
//     }
//   };
// }
// @toString
// class C {
//   public foo = "foo";
//   public num = 24;
// }
// console.log(new C().toString())
//output
// {"foo":"foo","num":24}
//1 -> CD
// function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     reportingURL = "http://www...";
//   };
// }
// @reportableClassDecorator
// class BugReport {
//   type = "report";
//   title: string;
//   constructor(t: string) {
//     this.title = t;
//   }
// }
// const bug = new BugReport("Needs dark mode");
// console.log(bug.title); // Prints "Needs dark mode"
// console.log(bug.type); // Prints "report"
//output
// Needs dark mode
// report
// ----------------------------------------------------------------
//2
//Property Decorators
// type PropertyDecorator =
// (target: Object, propertyKey: string | symbol) => void;
// 1.target ->  Either the constructor function of the class for a static member  or the prototype of the class for an instance member
// 2. propertyKey: The name of the property.
// returns:The return value will be ignored.
// function capitalizeFirstLetter(str: string) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
//   function observable(target: any, key: string): any {
//     // prop -> onPropChange
//     const targetKey = "on" + capitalizeFirstLetter(key) + "Change";
//     target[targetKey] =
//       function (fn: (prev: any, next: any) => void) {
//         let prev = this[key];
//         Reflect.defineProperty(this, key, {
//           set(next) {
//             fn(prev, next);
//             prev = next;
//           }
//         })
//       };
//   }
//   class C {
//     @observable
//     foo = -1;
//     @observable
//     bar = "bar";
//   }
//   const c = new C();
//   c.onFooChange((prev, next) => console.log(`prev: ${prev}, next: ${next}`))
//   c.onBarChange((prev, next) => console.log(`prev: ${prev}, next: ${next}`))
// c.foo = 100; // -> prev: -1, next: 100
// c.foo = -3.14; // -> prev: 100, next: -3.14
// c.bar = "baz"; // -> prev: bar, next: baz
// c.bar = "sing"; // -> prev: baz, next: sing
//output no -->error showing
//PD ->1
// class Greeter {
//   @format("Hello, %s")
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     let formatString = getFormat(this, "greeting");
//     return formatString.replace("%s", this.greeting);
//   }
// }
// import "reflect-metadata";
// const formatMetadataKey = Symbol("format");
// function format(formatString: string) {
//   return Reflect.metadata(formatMetadataKey, formatString);
// }
// function getFormat(target: any, propertyKey: string) {
//   return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }
//output --> no
// ----------------------------------------------------------------
//3
// Method Decorators
// type MethodDecorator = <T>(
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: TypedPropertyDescriptor<T>
// ) => TypedPropertyDescriptor<T> | void;
// 1.target: Either the constructor function of the class for a static member,or the prototype of the class for an instance member. 
// 2. propertyKey: The name of the property. 
// 3. descriptor: The property descriptor for the member;
// returns:If returns a value, it will be used as the descriptor of the member
// function logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value;
//   descriptor.value = function (...args: any) {
//     console.log('params: ', ...args);
//     const result = original.call(this, ...args);
//     console.log('result: ', result);
//     return result;
//   }
// }
// class C {
//   @logger
//   add(x: number, y:number ) {
//     return x + y;
//   }
// }
// const c = new C();
// c.add(1, 2);
//output
// params:  1 2
// result:  3
//MD->1
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   @enumerable(false)
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }
// function enumerable(value: boolean) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     descriptor.enumerable = value;
//   };
// }
//output -> no
// ----------------------------------------------------------------
//4
// Accessor Decorators
// Accessor decorators are generally the same as method decorators. The only differences are the keys in the descriptor
// function immutable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.set;
//   descriptor.set = function (value: any) {
//     return original.call(this, { ...value })
//   }
// }
// class C {
//   private _point = { x: 0, y: 0 }
//   @immutable
//   set point(value: { x: number, y: number }) {
//     this._point = value;
//   }
//   get point() {
//     return this._point;
//   }
// }
// const c = new C();
// const point = { x: 1, y: 1 }
// c.point = point;
// console.log(c.point === point)
//output -> no
//AS->1
// class Point {
//   private _x: number;
//   private _y: number;
//   constructor(x: number, y: number) {
//     this._x = x;
//     this._y = y;
//   }
//   @configurable(false)
//   get x() {
//     return this._x;
//   }
//   @configurable(false)
//   get y() {
//     return this._y;
//   }
// }
// function configurable(value: boolean) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     descriptor.configurable = value;
//   };
// }
//output -> no
// ----------------------------------------------------------------
//5
// Parameter Decorators
// type ParameterDecorator = (
//   target: Object,
//   propertyKey: string | symbol,
//   parameterIndex: number
// ) => void;
// target: Either the constructor function of the class for a static member,or the prototype of the class for an instance member. 
// 2. propertyKey: The name of the property (Name of the method, not the parameter). 
// 3. parameterIndex: The ordinal index of the parameter in the function’s parameter list.
// returns:The return value will be ignored
// class BugReport {
//   type = "report";
//   title: string;
//   constructor(t: string) {
//     this.title = t;
//   }
//   @validate
//   print(@required verbose: boolean) {
//     if (verbose) {
//       return `type: ${this.type}\ntitle: ${this.title}`;
//     } else {
//      return this.title; 
//     }
//   }
// }
// import "reflect-metadata";
// const requiredMetadataKey = Symbol("required");
// function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
//   let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
//   existingRequiredParameters.push(parameterIndex);
//   Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
// }
// function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
//   let method = descriptor.value!;
//   descriptor.value = function () {
//     let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
//     if (requiredParameters) {
//       for (let parameterIndex of requiredParameters) {
//         if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
//           throw new Error("Missing required argument.");
//         }
//       }
//     }
//     return method.apply(this, arguments);
//   };
// }
// ----------------------------------------------------------------
//6
// Metadata
require("reflect-metadata");
function validate(target, key, descriptor) {
    const originalFn = descriptor.value;
    // get the design type of the parameters
    const designParamTypes = Reflect
        .getMetadata('design:paramtypes', target, key);
    descriptor.value = function (...args) {
        args.forEach((arg, index) => {
            const paramType = designParamTypes[index];
            const result = arg.constructor === paramType
                || arg instanceof paramType;
            if (!result) {
                throw new Error(`Failed for validating parameter: ${arg} of the index: ${index}`);
            }
        });
        return originalFn.call(this, ...args);
    };
}
class C {
    sayRepeat(word, x) {
        return Array(x).fill(word).join('');
    }
}
__decorate([
    validate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], C.prototype, "sayRepeat", null);
const c = new C();
c.sayRepeat('hello', 2); // pass
c.sayRepeat('', 'lol'); // throw an error
