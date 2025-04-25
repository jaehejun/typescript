export {}
// //인터페이스를 이용한 객체 타입 정의

// var conan = {name:'코난',age:10};

// interface User{
//     name:string;
//     age:number;
// }
// var conan:User = {name:'코난',age:10};
// // var ran:User = {name:'미란',age:18,hobby:'태권도'}; //Error


// //type alias vs interface &:intersection 연산자
// //병합(merge)

// interface A {
//     a:string;
//     b:string;
// }
// interface A {
//     c:number;
//     d:number;
// }
// let aa:A = {
//     a:'a',
//     b:'b',
//     c:1,
//     d:2,
// };

// type B = {
//     a:string;
//     b:string;
// }
// // type B = {      //duplicate identifier 'B'
// //     c:number;
// //     d:number;
// // }
// type BB = B & {c:number; d:number;}

// let b:BB = {    //B와 {c:number,d:number} 모두 가지고있어야함
//     a:'a',
//     b:'b',
//     c:1,
//     d:2
// };


// //속성 타입
// //선택적 속성 optional property

// interface Book {
//     author?:string;
//     pages:number;
// }
// const ok:Book = {
//     author:'Rita',
//     pages:80,
// }
// const missing:Book = {
//     pages:100,
// }
// console.log(ok.author?.toUpperCase());
// console.log(missing.author?.toUpperCase());
// console.log("ok: ",ok);
// console.log("missing: ",missing);

// //읽기 전용 속성 readonly property
// interface Page {
//     readonly text:string;
// }
// function read(page:Page) {
//     console.log(page.text);
//     //page.text = 'Hello'; //'text' 는 readonly
// }
// const pagelsh = {
//     text:'Hello, world!',
// };
// pagelsh.text = 'Hello'; //OK
// read(pagelsh); //함수에 인자를 전달하는 순간의 타입만 체크
// //pagelsh는 readonly 제약 없는 일반 객체


// //함수와 메소드
// interface HasBothFunctionTypes {
//     readonly property: () => string; //속성구문(속성이 함수type)
//     method():string; //메소드 구문
//     // readonly method():string // -> Error
//     property2?: () => string; //optional property
//     method2?(): string; //optional method
// }

// const hasBoth:HasBothFunctionTypes = {
//     property:() => 'property',
//     method() {return 'method'},
//     property2() {return 'property2'},
//     //property2는 속성구문으로 타입정의되었지만 메소드로 사용가능(call signature은 일치시켜야함)
//     method2:() => ''
// };

// console.log('property: ', hasBoth.property());
// console.log('property2: ', hasBoth.property2 && hasBoth.property2());
// //propert2가 정의되어있다면 함수로 호출하고, undefined이면 아무것도 하지않음
// console.log('method: ', hasBoth.method());
// console.log('method2: ', hasBoth.method2 && hasBoth?.method2());


//호출 시그니처 (Call Signature)
//ts의 함수 타입 문법으로 함수의 매개변수와 반환타입 미리 선언하는것
//ex) (name:string,age:number,addr:string[]) => boolean

// type FunctionAlias = (input:string) => number; //call signature
// interface CallSignature { //old-style
//     (input:string):number;
// }
// const typedFunctionAlias:FunctionAlias = (input) => input.length;
// const typedCallSignature:CallSignature = (input) => input.length;
// console.log(typedCallSignature('aaaaaaa'));
// console.log(typedFunctionAlias('bbbb'));


// interface CallSignature {
//     (input:string):number; //호출 시그니처
//     count:number; //호출 횟수(헬퍼 속성)
//     greeting:(name:string) => void; //헬퍼 메소드
// }

// const typedCallSignature:CallSignature = (input) => input.length;
// //헬퍼 속성: 호출 횟수 카운팅
// typedCallSignature.count = 0;
// console.log("count: ", typedCallSignature.count);
// //헬퍼 메소드:인사를 도와주는 함수
// typedCallSignature.greeting = (name) => console.log('Hi, ${name}');
// console.log(typedCallSignature('hello')); //5
// typedCallSignature.count += 1; //count를 올림
// console.log("count: ", typedCallSignature.count);
// typedCallSignature.greeting('Lim'); //'Hi, Lim' 출력



//인덱스 시그니처 Index Signature
//객체의 속성이름이 a미리 정해져 있지 않은경우 그 속성들의 *타입을 정의하는 방법
// -> 임의의 key를 받고 해당 key에 대한 value 타입 지정

// const counts = {};
// // counts.apple = 3; //Error
// // counts.banana = 5; //Error

// interface Counts {
//     apple:number;
//     banana:number;
// }
// const counts:Counts = {apple:0,banana:0};
// counts.apple = 3;
// counts.banana = 5;

// // type Counts = {
// //     [key:string]:number;
// // };

// interface Counts {
//     [key:string]:number;
// }
// const counts:Counts = {};

// counts.apple = 3;
// counts.banana = 5;
// counts.melon = 2;
// counts.orange = 1;
// console.log(counts);



// //인덱스 시그니처 사용하면 프로퍼티 존재유무 알수없음
// //ts.config 파일의 "noUncheckedIndexedAccess":true 옵션

// interface Counts {
//     [key:string]:number;
// }
// const counts:Counts = {};

// counts.apple = 3;
// counts.banana = 5;

// function setCount(counts:Counts,fruit:string) {
//     // counts[fruit] += 10;
//     //TSError: ⨯ Unable to compile TypeScript:
//     //interface.ts:187:5 - error TS2532: Object is possibly 'undefined'.
// }
// setCount(counts, 'apple'); // 옵션 false이면 { apple: 3, banana: 5, peach: NaN }
// console.log(counts);



// //속성과 인덱스 시그니처 혼합
// interface Novel {
//     title:string; //필수 속성(실제 사용할 속성)
//     [key:string]:string|number|boolean;
// }
// const novel:Novel = {
//     title:'novel',
//     page:130,
// }
// interface Novel2 {
//     // title:string; //필수속성(실제 사용할 속성)
//     // title의 type인 string is not assignable to 'string' index type 'number|boolean'
//     //인덱스 시그니처는 interface의 모든 속성의 타입을 제한
//     //-> title이라는 속성도 인덱스 시그니처의 규칙을 따라야함함
//     [key:string]:number|boolean;
// }



// //숫자 인덱스 시그니처
// //인덱스 시그니처의 key타입은 string/number/symbol만 허용->객체타입은 키로 사용할수없음
// // interface IndexSignature {
// //     // [key:Novel]:string;
// // }

// // number인덱스는 자동으로 string으로 변환(123 -> '123')
// // interface IndexSignature {
// //     [key:number]:string|number; //'123'에 string도 가능
// //     [key:string]:number; //'123'은 number만 가능해야함
// // } //두개의 인덱스 시그니처가 충돌

// // [key:number]의 값 타입은 [key:string]의 값 타입과 호환되어야함
// // string|number가 string을 포함
// interface IndexSignature {
//     [key:number]:string
//     [key:string]:string|number
// }

// const is:IndexSignature = {
//     0:'hello',
//     name:'hong',
//     age:26
// };


// // interface 확장(extends)
// interface A {
//     id:number;
// }
// //B has id + name
// interface B extends A { // A type alias라도 가능능
//     name:string
// }
// let hong:B = {
//     id:1,name:'Hong'
// };

// // let kim:B = {id:1};
// // Property 'name' is missing in type {id:number;} but required in type B

// // let park:B = {id:3, name:'Pakr', addr:'Seoul'};
// //Type {id:number; name:string; addr:string;} is not assignable to type B
// // Object literal my only specify known properties, and 'addr' does not exist in type B

// //Type alias로 extends하기
// type A2 = {
//     id:number;
// }
// //HOw to extends A??
// type B2 = {
//     name:string;
// } & A2;
// let hong2:B2 = {
//     id:2,name:'Hong2'
// };

// //&는 Intersection Type Operater(교차 타입 연산자)
// //B는 {name:string}과 A 타입 둘 다를 만족해야함


type TUser = {
    id:number;
    name:string;
};
type TAddrUser = TUser & {
    addr:string;
};
type TDept = {
    id:number;
    dname:string;
    captain:string;
};

type Ud1 = TUser|TDept;
const ud1:Ud1 = {id:2, name:'HH'}; //TUser 인터페이스를 일치
console.log("ud1: ", ud1);
type Ud2 = (TUser|TDept) & {addr:string};
const ud2:Ud2 = {id:1, name:'HH', addr:'Seoul'};
console.log("ud2: ", ud2);
const ud3:Ud2 = {id:1, dname:'HH', captain:'HH', addr:'Seoul'};
console.log("ud3: ", ud3);

type A = [string,number]; //[string,number]
type RT1 = [boolean,A]; //[boolean, [string,number]]
type RT2 = [boolean,...A] //[boolean,string,number]

const rt1:RT1 = [true, ['rt1', 1]];
const rt2:RT2 = [true, 'rt2', 2];
console.log("rt1: ", rt1);
console.log("rt2: ", rt2);