abstract class Person {
    static species = 'homo sapiens';
    static isAdult(age: number) {
        if(age > 17) return true;
        return false;
    }
    constructor(public readonly name: string, protected age: number) {
        this.name = 'readonly'
    }
    greeting(this: Person): void {
        console.log(`hello ${this.name}. I'm ${this.age}`);
        this.explainJob();
    }
    abstract explainJob(): void;
}

class Teacher extends Person {
    explainJob(): void {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
    get subject() {
        if(!this._subject) {
            throw new Error("no subject");
        }
        return this._subject;
    }
    set subject(value) {
        if(!value) {
            throw new Error("no subject");
        }
        this._subject = value;
    }
    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }
}

const teacher = new Teacher('Mike', 39, 'Moth');
teacher.greeting();