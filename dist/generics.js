"use strict";
function copy(value, key) {
    value[key];
    return value;
}
// console.log(copy<string>('hello').toUpperCase);
// console.log(copy<number>(6).valueOf);
// 厳密にはこう
// console.log(copy<{name: string}>({name: 'Quill'}).name);
// こっちでもOK
console.log(copy({ name: 'Quill', age: 38 }, 'name'));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.get();
const TmpDatabase = {
    id: 3,
    data: [32]
};
const vegetables = ['Tomato', 'Broccoli'];
let tmp2;
let tmp3;
let aa; // number型
let bb; // boolean型
