// 型注釈
var hasValue1 = true;
var count = 10;
var float = 3.14;
var negative = -12;
var single = "hello";
// 型推論
var hasValue2;
// オブジェクト
var person = {
    name: 'Jack',
    age: 21
};
// 配列
var fruits = ['apple', 'banana'];
var book = ['business', 2, true];
// enum型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
// any型
var anything = true;
anything = "aaaa";
anything = 2;
// string型で定義した変数にany型を代入してもエラーは出ない
var banana;
banana = anything;
// union型
var union = 10;
// literal型
var apple = true;
var clothSize = 'large';
// OK
clothSize = 'small';
// NG
// clothSize = 8888;
// 関数への型付け
function add(num1, num2) {
    return num1 + num2;
}
add(2, 8);
// void型
function sayHello() {
    console.log('Hello');
}
var doubleNumber = function (number) { return number * 2; };
// callback関数への型付け
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// unknown型
var unknownInput;
var text;
text = 'gggg';
// NG
// text = unknownInput;
// never型
function error(message) {
    throw new Error(message);
}
