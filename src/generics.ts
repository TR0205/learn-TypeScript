function copy<T extends {name: string}, U extends keyof T>(value: T, key: U): T {
    value[key];
    return value;
}
// console.log(copy<string>('hello').toUpperCase);
// console.log(copy<number>(6).valueOf);

// 厳密にはこう
// console.log(copy<{name: string}>({name: 'Quill'}).name);
// こっちでもOK
console.log(copy({ name: 'Quill', age: 38 }, 'name'));

// keyof演算子
type K = keyof { name: string; age: number }

class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.get();

interface TmpDatabase<T> {
    id: number;
    data: T[];
}
const TmpDatabase: TmpDatabase<number> = {
    id: 3,
    data: [32]
}

// Utility型
interface Todo {
    title: string;
    text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const vegetables: Array<string> = ['Tomato', 'Broccoli'];

interface ResponseData<T extends { message: string } = any> {
    data: T;
    status: number;
}
let tmp2: ResponseData;

interface Vegetables {
    readonly tomato: string;
    pumplin?: string;
}
let tmp3: keyof Vegetables;
type MappedTypes = {
    -readonly [P in keyof Vegetables]?: string
}

type ConditionalTypes = 'tomato' extends string ? number : boolean;
let aa: ConditionalTypes; // number型

type ConditionalTypes2 = string extends 'tomato' ? number : boolean;
let bb: ConditionalTypes2; // boolean型
