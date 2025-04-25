export {}

//타입제한자 - top 타입 - any/unknown
// const anyParam = (value:any) => {
//     console.log(`param: ${value.toUpperCase()}`);
//     console.log(`param: ${value.toFixed(2)}`);
// };
// anyParam([1,2,3]);

// const anyParam = (value:unknown) => {
//     console.log(`param: ${value.toupperCase()}`); //value:unknown
//     console.log(`param: ${value.toFIxed(2)}`);
// };
// anyParam([1,2,3];)

// let x:unknown; //타입 모르지만 안전한값
// x = true;
// let a:any = x; //안정성을 잃어버림
// console.log(a);
// let b:string = x as string; //string이 아닐 수 있는데 강제로 바꿈
// console.log(b.toUpperCase());
// let c = x as number; //number로 강제로 바꿈
// console.log(c.toFixed(2));


// const anyParam = (value:unknown) => {
//     if (typeof value === 'string') {
//         console.log(`param: ${value.toUpperCase()}`);
//     }
// };
// anyParam('hello');


// const isString = (value:unknown) => typeof value === 'string';
// //value가 string인지 확인

// const f1 = (value:number|string|boolean|[string,number]) => {
    //     if (isString(value)) {
        //         console.log(value.toUpperCase());
        //     }
        // };
        
        // let str1 = f1('string');
        // let str2 = f1(123);
        // let str3 = f1(['str',4]);
        // let str4 = f1(true);
        
        
        
// //타입 서술어(type predicate) : 리턴 type 하나만 사용할 수 있음
// const isString = (value:unknown):value is string => typeof value === 'string';
// const f1 = (value:number|string|boolean|[string,number]) => {
//     if(isString(value)) {
//         console.log(value.toUpperCase());
//     }
// };
// f1('aaa');
// f1(111);
// f1(true);

// // :value is string|number // OK
// // (value:unknown, value2:unknown):value is string, value2 is number //X
// // :value is [string,number] //OK

// // const isString2 = (value:unknown, value2:unknown): value is string, value2 is stirng => typeof value === 'string';
// // const f2 = (value:number|string|boolean, value2:number|string) => {
// //     if(isString2(value,value2)) {
// //         console.log(value.toUpperCase());
// //         console.log(value2.toUpperCase());
// //     }
// // };



// //타입 이상을 검사하는 경우 예상치 못한 결과
// const isString = (value:unknown):value is string =>
//     typeof value === 'string' && value.length >= 7;

// const f1 = (value:string|boolean) => {
//     if (isString(value)) {
//         console.log(value.toUpperCase());
//     }
//     else {
//         console.log('길이가 7미만이거나 boolean이 아님');
//         // console.log(value?.length); //boolean일 수 있음
//     }
// };
// f1('aaa');
// f1('234asdfasdf');
// f1(true);


// //타입 연산자 typeof <literal> : 제공되는 값의 타입(Symbol Table)반환
// const customer1 = {
//     name:'conan',
//     mobile:'010-1111-1111',
// };
// let customer2:typeof customer1; //{name:string, mobile:string}
// //JS는 object 반환 TS는 값의 type 반환


// //keyof <type> - 객체의 key값을 string 또는 number의 리터럴 유니온 타입으로 반환
// interface ICustomer {
//     name:string;
//     mobile:string;
//     email:string;
//     role:number;
// }
// const hong = {
//     name:'Hong',
//     mobile:'01011112222',
//     email:'hong@gmail.com',
//     role:1
// };

// // const f3 = (customer:ICustomer,key:string) => customer[key];
// //key가 string이므로 ICustomer에 없는 문자열이 올 수도 있음

// const f3 = (customer:ICustomer,key:'name'|'mobile'|'email'|'role') => customer[key];
// const f4 = (customer:ICustomer, key:keyof ICustomer) => customer[key];
// console.log(f3(hong,'name'));
// console.log(f4(hong,'name'));
// console.log(f4(hong,'email'));
// // console.log(f3(hong,'phone'));



// //타입 연산자(advanced types) - keyof typeof : 제공되는 값에 존재하는 키만 매개변수의 타입으로 허용
// const emp = {
//     id:1,
//     name:'코난',
//     mobile:'010-1111-1111',
//     email:'conan@gmail.com',
//     role:2,
//     auth:1,
//     zone:2,
// };

// //const someEmpFunc = (key:?) => emp[key];

// const someEmpFunc = (key:keyof typeof emp) => emp[key];
// console.log(someEmpFunc('id')); //1
// console.log(someEmpFunc('mobile')); //1
// // console.log(someEmpFunc('addr'));


// // type assertion (as) - 값의 타입을 재정의(확신할 수 있는 경우만)
// const someData = '{"name":"conan","age":10}';
// const me = JSON.parse(someData); //const me: any
// console.log(me.name); //conan
// console.log(me.mobile); //undefined 존재하지 않는 프로퍼티 접근해도 에러X

// interface IPerson {
//     name:string;
//     age:number;
// }
// const someData2 = '{"name":"Hong","age":33}';
// const me2 = JSON.parse(someData2) as IPerson;
// //JSON.parse(someData2)의 결과를 IPerson 타입으로 간주
// console.log(me2.name);
// // console.log(me2.mobile); // 'mobile' not exist on IPerson


// //Error 코드 실행 중 문제 생기면 Error 객체생성해서 예외(exception)를 던짐
// throw new Error("something wrong happend!");

// const err = new Error("메시지");
// console.log(err.name); //"Error"
// console.log(err.message); //"메시지"
// console.log(err.stack); //어디서 발생했는지 추적정보(stack trace)

// try {
//     throw new Error("문제발생!");
// } catch (e) {
//     console.log("에러를 잡았음!", e.message); //에러처리
// }

// class MyError extends Error {
//     constructor(message:string) {
//         super(message);
//         this.name = "MyError";
//     }
// }
// throw new MyError("내가 만든 에러!");


// //catch 블록과 타입 어서션1
// const someFunc = () => {
//     try {
//         // throw new Error("some error!!!!"); //error는 Error객체
//         throw 'some string error!!!!'; //error는 string
//         // throw ['some','array','error]; //error는 배열
//     } catch (error) { //(local var) error: unknown
//         console.log("error>>>", error, typeof error); //error의 타입단언은 
//         // console.log(error.message);
//     }
// };
// someFunc();

// const someFunc2 = () => {
//     try {
//         throw new Error("some error2!!!!");
//         //throw 'some string error2!!!!';
//         //throw ['some','array','error2'];
//     } catch (error) {
//         // console.log("error2>>>", error, typeof error); //local val error : unknown
//         console.log((error as Error).message); //some error2!!!!
//     }
// };
// someFunc2();


// //catch 블록과 타입 어서션 2
// const someFunc = () => {
//     try {
//         // throw new Error("some Error!!!");
//         // throw 'some string error!!!;
//         // throw ['some','array','error'];
//         // throw {'some','object error'};
//         throw {code:503, message:"Internal Server Error!"};
//     } catch (error) {
//         // if (error !== null && typeof error === 'object' && 'message' in error)
//         //     console.log(error.message);
//         // else
//             // console.log(JSON.stringify(error));
//         const message = error instanceof Error? error.message:error;
//         console.log(JSON.stringify(message));
//     }
// };
// someFunc();


// //catch 블록과 타입 어서션3 - 타입서술어로 작성
// //예외처리 시 타입안정성 보장하면서 다양한 형태로 던져질 수 있는 예외 일관되게 처리
// interface IErrorWithMessage {
//     message: string;
// }
// //unknown타입으로 들어온 error가 정말로 message라는 속성을 가진 문자열 기반 객체인지 판별
// //타입가드를 사용해 정상적인 Error객체처럼 생겼는지 확인
// const isErrorWithMessage = (error:unknown): error is IErrorWithMessage =>
//     typeof error === 'object' && error !== null
//     && 'message' in error && typeof error.message === 'string';
//     //(error as Reocde<string,unknown>).message === 'string'

//     //error가 message속성을 갖고 있다면 그대로 반환
//     //객체를 문자열로 변환해서 새로운 Error 객체 생성
// const toErrorWithMessage = (error:unknown) =>
//     isErrorWithMessage(error) ? error:new Error(JSON.stringify(error));

// const someFunc2 = () => {
//     try {
//         throw new Error('some error!!!');
//         throw 'some stirng error!!!';
//         throw ['some','array','error'];
//         throw {'some':'object error'};
//     } catch (error) {
//         const {message} = toErrorWithMessage(error);
//         console.log('my error message>>', message);
//     }
// }
// someFunc2();


//non-null 어서션 - null 또는 undefined를 포함할 수 있는 변수에서 null과 undefined제거
const someArray = [
    {name:'lim',age:25},
    {name:'jang',age:29},
    {name:'han',age:27},
];
const jang = someArray.find((a) => a.name === 'jang');
// let jangAge:number = jang.age; //Error:jang is possibly undefined
// let jangAge2:number = jang?.age; //Error:number|undefined not assignable to number
let jangAge3:number = jang!.age; //non-null assertion
console.log(jang);
console.log(jangAge3);