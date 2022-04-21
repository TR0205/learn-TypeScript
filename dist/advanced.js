"use strict";
var _a, _b;
const quill = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = toUpperCase('hello');
const upperHello2 = toUpperCase;
const upperHello3 = function (x) { return 0; };
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
const designer = {
    name: 'Quill',
    role: 'web',
    // 追加できる
    food: 'apple',
    // 追加できない
    // number: 2
};
const downloadedData = {
    id: 1
};
// エラー
// console.log(downloadedData.user.name);
// undefined
console.log((_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name);
// Nuulish Coalescing
const userData = (_b = downloadedData.user) !== null && _b !== void 0 ? _b : 'no-user';
// type id2 = DownloadedData["user"]["name"];
// レストパラメータ
function advancesFn(...args) {
}
advancesFn(0, 'hi', true, 1, 1, 3);
// typeofで型を取得する
const peter = {
    name: 'Peter',
    age: 38
};
