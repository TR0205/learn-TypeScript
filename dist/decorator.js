"use strict";
// function Logging(message: string) {
//     return function (constructor: Function) {
//         console.log(message);
//         console.log(constructor);
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function Component(template: string, selector: string) {
//     return function <T extends { new(...args: any[]): { name: string } }>(constructor: T) {
//         return class extends constructor {
//             constructor(...args: any[]) {
//                 super(...args);
//                 const mountedElement = document.querySelector(selector);
//                 const instance = new constructor();
//                 if (mountedElement) {
//                     mountedElement.innerHTML = template;
//                     mountedElement.querySelector('h1')!.textContent = instance.name;
//                 }
//             }
//         }
//     }
// }
console.dir(PropertyLogging);
function PropertyLogging(target, propertyKey) {
    console.log('propertyLogging');
    console.log(target);
    console.log(propertyKey);
}
// @Component('<h1>{{ name }}</h1>', '#app')
// @Logging('Logging User')
class User {
    constructor(age) {
        this.age = age;
        this.name2 = 'Quill';
        console.log('User was created');
    }
    greeting() {
        console.log('hi');
    }
}
__decorate([
    PropertyLogging
], User.prototype, "name2", void 0);
const user1 = new User(23);
