interface Engineer {
    name: string,
    role: string
}

interface Blogger {
    name: string,
    follower: number
}

interface ENginnerBlogger extends Engineer, Blogger {}

const quill: ENginnerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

// 条件分を使用し型を絞り込む
// 関数のオーバーフロード
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = toUpperCase('hello');
const upperHello2 = toUpperCase;

// 関数型のオーバーロード
interface TmpFunc {
    (x: string): number;
    (x: number): number;
}
const upperHello3: TmpFunc = function (x: string | number) {return 0};

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    if('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
}

class Dog {
    kind: 'dog' = 'dog'
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    kind: 'bird' = 'bird'
    speak() {
        console.log('tweet');
    }
    fly() {
        console.log('flutter');
    }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird())

// 型アサーション
// const input = document.getElementById('input') as HTMLInputElement;
// input.value = 'initial input value';

// Non-null assertion operator
// const input = document.getElementById('input')!;
// input.value = 'initial input value';

// インデックスシグネチャ
// interface Designer {
//     name: string;
// }
// const designer: Designer = {
//     name: 'Quill',
//     // 追加できない
//     role: 'web'
// }

interface Designer {
    name: string;
    [index: string]: string;
}
const designer: Designer = {
    name: 'Quill',
    role: 'web',
    // 追加できる
    food: 'apple',
    // 追加できない
    // number: 2
}

// Optional Chaining
interface DownloadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}
const downloadedData: DownloadedData = {
    id:1
}
// エラー
// console.log(downloadedData.user.name);
// undefined
console.log(downloadedData.user?.name);

// Nuulish Coalescing
const userData = downloadedData.user ?? 'no-user';

// LookUp型
type id = DownloadedData["id"];
// type id2 = DownloadedData["user"]["name"];

// レストパラメータ
function advancesFn(...args: readonly[number, string, boolean?, ...number[]]) {
    
}
advancesFn(0, 'hi', true, 1, 1, 3);

// typeofで型を取得する
const peter = {
    name: 'Peter',
    age: 38
} as const;
type PeterType = typeof peter;