// 型注釈
let hasValue1: boolean = true;
let count: number = 10;
let float:  number = 3.14;
let negative: number = -12;
let single: string = "hello";


// 型推論
let hasValue2: boolean;


// オブジェクト
const person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}


// 配列
const fruits: string[] = ['apple', 'banana'];
const book: [string, number, boolean] = ['business', 2, true];


// enum型
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee = {
    hot: true,
    size: CoffeeSize.SHORT
}


// any型
let anything: any = true;
anything = "aaaa";
anything = 2;

// string型で定義した変数にany型を代入してもエラーは出ない
let banana: string;
banana = anything;


// union型
let union: number | string = 10;


// literal型
const apple: true = true;

type ClothSize = 'small' | 'medium' | 'large';
let clothSize: ClothSize = 'large';
// OK
clothSize = 'small';
// NG
// clothSize = 8888;


// 関数への型付け
function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 8);


// void型
function sayHello(): void {
    console.log('Hello');
}

const doubleNumber: (num: number) => number = number => number * 2;


// callback関数への型付け
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
}

doubleAndHandle(21, doubleNum => {
    return doubleNum;
});


// unknown型
let unknownInput: unknown;
let text: string;
text = 'gggg';
// NG
// text = unknownInput;


// never型
function error(message: string) {
    throw new Error(message);
}