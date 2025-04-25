export {}

// 연습문제 - 타입 서술어(Type Predicate)
const isStringNumber = (value:unknown):value is [string,number] => 
    //이부분을 작성
    Array.isArray(value) && value.length === 2 && 
    typeof value[0] === 'string' && typeof value[1] === 'number';

const f1 = (value:number|string|boolean|[string,number]) => {
    if (isStringNumber(value)) {
        console.log(value[0].toUpperCase(), value[1].toFixed());
    }
};

f1(123);
f1('string');
f1(true);
f1(['string', 123]);

interface Animal {}
interface Dog extends Animal {
    name:string;
}
interface Cat extends Animal {
    punch():void;
}
class Retriever implements Dog {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
}

function isDog(a:Animal):a is Dog {
    //이 부분을 작성
    if ('name' in a && typeof (a as Dog).name === 'string') {
        console.log(`${a.name} is a Dog!`);
        return true;
    }
    return false;
}

isDog(Retriever);


// 문제1) 다음에서 T1과 동일한 타입으로 T2 정의
const cart = {
    X:1,
    Y:2,
    Z:3,
};

type T1 = "X"|"y"|"Z";
type T2 = keyof typeof cart;

// 문제2) 다음에서 T3과 동일한 타입으로 T4 정의
const constCart = {
    X:1,
    Y:2,
    Z:3,
} as const;

type T3 = 1|2|3;
type T4 = typeof constCart[keyof typeof constCart];


// 다음에서 '가', '나', '다' 어떤걸 throw 해도 에러 메시지를 출력하도록 (라) 수정 (type predicate)
try {
    throw new Error('some error!!!!');    // 가
    // throw 'some string error!!!';         // 나
    // throw ['some', 'array', 'error'];       // 다
} catch (error) {
    // console.log((error as Error).message);  // 라
}