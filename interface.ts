interface Human {
    name: string;
    age: number;
    greeting(message: string): void;
}

class Developer implements Human {
    constructor(public name: string, public age: number, public experience: number) {}
    greeting(message: string): void {
        console.log('Hello');
    }
}

interface addFunc {
    (num: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}