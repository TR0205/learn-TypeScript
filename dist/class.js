"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = 'readonly';
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    greeting() {
        console.log(`hello ${this.name}. I'm ${this.age}`);
        this.explainJob();
    }
}
Person.species = 'homo sapiens';
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error("no subject");
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error("no subject");
        }
        this._subject = value;
    }
}
const teacher = new Teacher('Mike', 39, 'Moth');
teacher.greeting();
